import { LetterCaseCapitalizeIcon,CalendarIcon,TriangleDownIcon, SymbolIcon , DotsHorizontalIcon} from "@radix-ui/react-icons"
import TaskColumn from "./taskColumn";

interface Task {
  id: number;
  title: string;
  startDate: string;
  dueDate: string;
  category: string[];
  status: string;
  priority: string;
}

interface TaskTableProps {
    data: Task[];
}


const TaskTable : React.FC<TaskTableProps> = ({data})=>{
         return(<div className="pt-4 ">
         <div className="min-h-screen overflow-x-auto">
            <table className="min-w-full table-auto bg-[#000] text-sm">
               <thead className="text-neutral-500">
                  <tr className="border-t-1 border-b-1 border-neutral-800">
                     <th className="py-1 px-6 hover:bg-neutral-950 border-r-1 border-r-neutral-800">
                         <div className="flex justify-center items-center gap-2 ">
                           <LetterCaseCapitalizeIcon className="size-4"/>
                           <span className="pb-1 font-medium">Task</span>
                         </div>
                     </th>
                     
                     <th className="py-1 px-6 hover:bg-neutral-950 border-r-1 border-r-neutral-800">
                         <div className="flex justify-center items-center gap-2 ">
                           <TriangleDownIcon className="border-1 border-neutral-500 rounded-xl"/>
                           <span className="pb-0.25 font-medium whitespace-nowrap">Priority</span>
                         </div>
                     </th>
                     <th className="py-1 px-6 hover:bg-neutral-950 border-r-1 border-r-neutral-800">
                         <div className="flex justify-center items-center gap-2 ">
                           <CalendarIcon className=""/>
                           <span className="pb-0.25 font-medium whitespace-nowrap">Start Date</span>
                         </div>
                     </th>
                     <th className="py-1 px-6 hover:bg-neutral-950 border-r-1 border-r-neutral-800">
                         <div className="flex justify-center items-center gap-2 ">
                           <CalendarIcon className=""/>
                           <span className="pb-0.25 font-medium whitespace-nowrap">Due Date</span>
                         </div>
                     </th>
                     <th className="py-1 px-6 hover:bg-neutral-950 border-r-1 border-r-neutral-800">
                         <div className="flex justify-center items-center gap-2 ">
                           <SymbolIcon className=""/>
                           <span className="pb-0.25 font-medium whitespace-nowrap">Status</span>
                         </div>
                     </th>
                     <th className="py-1 px-2 hover:bg-neutral-950">
                         <div className="flex justify-center items-center gap-2 ">
                           <DotsHorizontalIcon className=""/>
                         </div>
                     </th>
                  </tr>
               </thead>
               <tbody>
                 {data.map((item)=>{
                  return(
                    <TaskColumn key={item.id} item={item}/>
                  )
                 })}
               </tbody>
            </table>
         </div>
      </div>
)

}
export default TaskTable