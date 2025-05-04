
import Header from "../component/header"
import TaskTable from "../component/taskTable"

const Main = ()=>{
   const data = [
    {id : 1,title: "Task Zen",startDate : "01/10/2024",dueDate : "05/01/2025",category:["UI","Frontend","React"],status : "In Process",priority : "High"},
    {id : 2,title: "Dev Logger",startDate : "04/03/2025",dueDate : "30/05/2025",category:["Feature","Logic"],status : "Pending",priority : "Medium"},
    {id : 3,title: "Expense Tracker",startDate : "02/03/2025",dueDate : "30/05/2025",category:["UX","Storage","React"],status : "Completed",priority : "High"},
  ]
 return(
    <div className="px-5 py-4">
       <Header />
       <TaskTable data={data}/>
    </div>
    
 )
}
export default Main













































