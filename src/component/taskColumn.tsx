
import { Status,Priority } from "../model/task"

import Dropdown from "./dropdown"
interface Task {
  id: number;
  title: string;
  startDate: string;
  dueDate: string;
  category: string[];
  status: string;
  priority: string;
}
interface TaskColumnProps {
    item : Task;
}
const TaskColumn :React.FC<TaskColumnProps> = ({item}) =>{
    return(
        <tr className="border-y-1 border-neutral-800">
                      <td className="px-4 py-2 hover:bg-neutral-950 border-r-1 border-r-neutral-800 wh">{item.title}</td>
                      <td className="py-1 text-center hover:bg-neutral-950 border-r-1 border-r-neutral-800">
                        <Dropdown options={[Priority.high,Priority.medium,Priority.low]}/>
                      </td>
                      <td className="px-4 py-1  hover:bg-neutral-950 border-r-1 border-r-neutral-800">{item.startDate}</td>
                      <td className="px-4 py-1  hover:bg-neutral-950 border-r-1 border-r-neutral-800">
                        {item.dueDate}
                      </td>
                      <td className="py-1 text-center hover:bg-neutral-950 border-r-1 border-r-neutral-800">
                        <Dropdown options={[Status.completed,Status.in_process,Status.pending]}/>
                      </td>                    
        </tr>
    )
}
export default TaskColumn