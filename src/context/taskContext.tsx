import { createContext } from "react";
import myTASKS from "../service/taskManager";

const TaskContext = createContext<typeof myTASKS | null>(null)

export default TaskContext