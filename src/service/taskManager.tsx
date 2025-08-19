import { Priority, Status, Task } from "../model/task";

class TaskManager {
  storageKey: string;
  tasks: Task[];
  constructor(storageKey: string = "tasks") {
    this.storageKey = storageKey;
    this.tasks = this.loadTasks();
  }
  loadTasks() {
    const TasksArray = localStorage.getItem(this.storageKey);
    if (!TasksArray) {
      return [];
    }
    const TasksArrayJson = JSON.parse(TasksArray);

    // Convert task as Task instance for task methods
    return TasksArrayJson.map(
      (task: Task) =>
        new Task(
          task.title,
          task.id,
          task.status,
          task.priority,
          new Date(task.startDate), // Convert startDate as Date for date methods
          new Date(task.dueDate),
        ),
    );
  }
  saveTask() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }
  addTasks(
    title: string,
    status: Status,
    priority: Priority,
    startDateString: string,
    dueDateString: string,
  ) {
    const newTaskId = crypto.randomUUID();
    const startDate = new Date(startDateString);
    const dueDate = new Date(dueDateString);

    const newTask = new Task(
      title,
      newTaskId,
      status,
      priority,
      startDate,
      dueDate,
    );
    this.tasks.push(newTask);
    this.saveTask();
  }
  deleteTask(id: string) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) this.tasks.splice(index, 1);
    else console.log("Invalid Id");
    this.saveTask();
  }
  removeAllTask() {
    this.tasks = [];
    localStorage.removeItem(this.storageKey);
  }
  get allTasks() {
    return [...this.tasks];
  }
}
const myTASKS = new TaskManager();
myTASKS.addTasks(
  "Create Zentask",
  Status.in_process,
  Priority.medium,
  "20-10-24",
  "20-07-2025",
);
export default myTASKS;

