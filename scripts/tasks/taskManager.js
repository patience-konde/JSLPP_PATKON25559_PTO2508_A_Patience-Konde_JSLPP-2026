// tasks/taskManager.js
import { validateTaskForm } from "./formUtils";

// Example task list (in-memory for now)
let tasks = [];

/**
 * Handle form submission and create a new task
 */
export const handleSubmit = (formData) => {
  const errors = validateTaskForm(formData);

  if (Object.keys(errors).length > 0) {
    console.error("Form validation failed:", errors);
    return { success: false, errors };
  }

  // If valid, save the task
  const newTask = {
    id: Date.now(),
    title: formData.title.trim(),
    description: formData.description?.trim() || "",
    priority: formData.priority,
    status: formData.status || "todo", // 👈 default column
  };

  tasks.push(newTask);
  console.log("Task saved:", newTask);

  return { success: true, task: newTask };
};

/**
 * Get all tasks
 */
export const getTasks = () => tasks;

/**
 * Get tasks by column/status
 */
export const getTasksByColumn = (column) => {
  return tasks.filter((task) => task.status === column);
};

/**
 * Update a task's status (move between columns)
 */
export const updateTaskStatus = (taskId, newStatus) => {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.status = newStatus;
    console.log(`Task ${taskId} moved to ${newStatus}`);
    return { success: true, task };
  }
  return { success: false, error: "Task not found" };
};

/**
 * Update task details (title, description, priority)
 */
export const updateTask = (taskId, updates) => {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    Object.assign(task, updates);
    console.log(`Task ${taskId} updated`, task);
    return { success: true, task };
  }
  return { success: false, error: "Task not found" };
};

/**
 * Delete a task
 */
export const deleteTask = (taskId) => {
  const index = tasks.findIndex((t) => t.id === taskId);
  if (index !== -1) {
    const removed = tasks.splice(index, 1)[0];
    console.log(`Task ${taskId} deleted`);
    return { success: true, task: removed };
  }
  return { success: false, error: "Task not found" };
};

/**
 * Clear all tasks (for testing/demo)
 */
export const clearTasks = () => {
  tasks = [];
  console.log("All tasks cleared.");
};