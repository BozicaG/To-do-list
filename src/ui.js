import {
  tasks,
  allProjects,
  saveTasks,
  saveProjects,
  deleteTask,
  deleteProject,
  editTask,
  clearCompletedTasks,
  updateProjectDropdown
} from './logic.js';
import trash from './img/trash.svg';
import trashHover from './img/trash-hover.svg';
import edit from './img/edit.svg';
import plus from './img/plus.svg';
import projectsIcon from './img/projects.svg';
import allIcon from './img/all.svg';
import importantIcon from './img/important.svg';
import mediumIcon from './img/medium.svg';
import lowIcon from './img/low.svg';



export function initApp() {
  const content = document.getElementById('content');
  const taskForm = document.getElementById('task-form');
  const projectForm = document.getElementById('project-form');
  const tasksModal = document.getElementById('task-dialog');
  const projectModal = document.getElementById('project-dialog');
  const projectsContainer = document.getElementById('projects');

document.querySelector('#all-tasks img').src = allIcon;
document.querySelector('#important-tasks img').src = importantIcon;
document.querySelector('#medium-tasks img').src = mediumIcon;
document.querySelector('#low-tasks img').src = lowIcon;


  function renderTaskList(title, filteredTasks, showProjectName = true) {
    content.innerHTML = `<h3>${title}</h3>`;
    filteredTasks.forEach(task => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : `task-item ${task.priority}`;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = `round-checkbox ${task.priority}`;
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        saveTasks();
        renderAllTasks();
      });

      const contentDiv = document.createElement('div');
      contentDiv.className = 'about-task';
      const projectName = task.projectId
        ? allProjects.find(p => p.id == task.projectId)?.name
        : '';
      contentDiv.innerHTML = `
        <strong>${task.title}${showProjectName && projectName ? ` (${projectName})` : ''}</strong>
        <em>${task.priority}</em>Due Date: ${task.dueDate || '—'}
        <p>${task.description}</p>
      `;

      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'task-actions';

      const editBtn = document.createElement('button');
      editBtn.innerHTML = `<img src="${edit}" class="edit-icon" alt="Edit task">`;
      editBtn.addEventListener('click', () => {
        tasksModal.showModal();
        taskForm.title.value = task.title;
        taskForm.description.value = task.description;
        taskForm.dueDate.value = task.dueDate;
        taskForm.priority.value = task.priority;
        taskForm.projectId.value = task.projectId || '';
        taskForm.dataset.editingId = task.id;
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = `
        <img src="${trash}" class="trash-icon default">
        <img src="${trashHover}" class="trash-icon hover">
      `;
      deleteBtn.addEventListener('click', () => {
        deleteTask(task.id);
        renderAllTasks();
      });

      actionsDiv.appendChild(editBtn);
      actionsDiv.appendChild(deleteBtn);

      li.prepend(checkbox);
      li.appendChild(contentDiv);
      li.appendChild(actionsDiv);
      content.appendChild(li);
    });

    const newTask = document.createElement('button');
    newTask.className = 'btn new-task';
    newTask.innerHTML = `<img class="new-task-img" src="${plus}" alt="add-task"> New Task`;
    newTask.addEventListener('click', () => tasksModal.showModal());
    content.appendChild(newTask);
  }

  function renderAllTasks() {
    renderTaskList('All Tasks', tasks);
  }

  function renderTasksByPriority(priority) {
    const filtered = tasks.filter(t => t.priority === priority);
    renderTaskList(`${priority.charAt(0).toUpperCase() + priority.slice(1)} Tasks`, filtered);
  }

  function renderTasksByProject(projectId) {
    const project = allProjects.find(p => p.id == projectId);
    const filtered = tasks.filter(t => t.projectId == projectId);
    renderTaskList(`~ ${project?.name || 'Unknown'} ~`, filtered, false);
  }

  function loadProjects() {
    projectsContainer.innerHTML = '';
    allProjects.forEach(project => {
      const btn = document.createElement('button');
      btn.className = 'btn project-btn';
      btn.innerHTML = `
        <img src="img/projects.svg" class="sidebar-img">
        <span class="project-name">${project.name}</span>
        <span class="delete-project">
          <img src="img/trash.svg" class="trash-icon default">
          <img src="img/trash-hover.svg" class="trash-icon hover">
        </span>
      `;
      btn.addEventListener('click', e => {
        if (e.target.closest('.delete-project')) {
          deleteProject(project.id);
          loadProjects();
          renderAllTasks();
        } else {
          renderTasksByProject(project.id);
        }
      });
      projectsContainer.appendChild(btn);
    });
  }

  // Event listeners
  document.getElementById('all-tasks').addEventListener('click', renderAllTasks);
  document.getElementById('important-tasks').addEventListener('click', () => renderTasksByPriority('important'));
  document.getElementById('medium-tasks').addEventListener('click', () => renderTasksByPriority('medium'));
  document.getElementById('low-tasks').addEventListener('click', () => renderTasksByPriority('low'));
  document.getElementById('clear-completed').addEventListener('click', () => {
    clearCompletedTasks();
    renderAllTasks();
  });

  document.getElementById('new-project').addEventListener('click', () => projectModal.showModal());

  document.getElementById('cancel-task-btn').addEventListener('click', () => {
    taskForm.reset();
    taskForm.dataset.editingId = '';
    tasksModal.close();
  });

  document.getElementById('cancel-project-btn').addEventListener('click', () => {
    projectForm.reset();
    projectModal.close();
  });

  projectForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('project-name').value.trim();
    if (!name) return;
    if (allProjects.some(p => p.name.toLowerCase() === name.toLowerCase())) {
      alert('Project with same name exists.');
      return;
    }
    allProjects.push({ id: Date.now(), name, createdAt: new Date().toISOString().split('T')[0] });
    saveProjects();
    loadProjects();
    updateProjectDropdown(document.getElementById('task-project'));
    projectForm.reset();
    projectModal.close();
  });

  taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(taskForm);
    const newTask = {
      id: Date.now(),
      title: formData.get('title'),
      description: formData.get('description'),
      dueDate: formData.get('dueDate') || 'No deadline',
      priority: formData.get('priority'),
      projectId: formData.get('projectId') || null,
      completed: false
    };
    const editingId = taskForm.dataset.editingId;
    if (editingId) {
      editTask(editingId, newTask);
      taskForm.dataset.editingId = '';
    } else {
      tasks.push(newTask);
      saveTasks();
    }
    renderAllTasks();
    taskForm.reset();
    tasksModal.close();
  });

  loadProjects();
  updateProjectDropdown(document.getElementById('task-project'));
  renderAllTasks();
}