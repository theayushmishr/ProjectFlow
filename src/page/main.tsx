
import { useContext, useEffect, useState } from "react"
import Header from "../component/header"
import TaskTable from "../component/taskTable"
import TaskContext from "../context/taskContext"
const Main = ()=>{
   const TASKS = useContext(TaskContext)
   const [tasks,setTasks] = useState(TASKS.allTasks)
   useEffect(()=>{
      setTasks(TASKS.allTasks)
   },[])
 return(
    <div className="px-5 py-4">
       <Header />
       <TaskTable data={tasks}/>
    </div>
    
 )
}
export default Main













































