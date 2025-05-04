
import { useEffect, useState } from "react"
import Header from "../component/header"
import TaskTable from "../component/taskTable"
import myTASKS from "../service/taskManager"
const Main = ()=>{
   const [tasks,setTasks] = useState(myTASKS.allTasks)
   useEffect(()=>{
      setTasks(myTASKS.allTasks)
   },[])
 return(
    <div className="px-5 py-4">
       <Header />
       <TaskTable data={tasks}/>
    </div>
    
 )
}
export default Main













































