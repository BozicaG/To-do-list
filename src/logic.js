export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export let allProjects = JSON.parse(localStorage.getItem('projects')) || [];

export function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(allProjects));
}

export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
}

export function deleteProject(id) {
  allProjects = allProjects.filter(p => p.id !== id);
  tasks = tasks.filter(t => t.projectId !== id);
  saveProjects();
  saveTasks();
}

export function editTask(id, updatedData) {
  const task = tasks.find(t => t.id === id);
  if (task) Object.assign(task, updatedData);
  saveTasks();
}

export function clearCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
}

export function updateProjectDropdown(selectElement) {
  selectElement.innerHTML = '';
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'None';
  selectElement.appendChild(defaultOption);

  allProjects.forEach(p => {
    const option = document.createElement('option');
    option.value = p.id;
    option.textContent = p.name;
    selectElement.appendChild(option);
  });
}