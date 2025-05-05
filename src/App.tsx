// import TaskManager from "./service/taskManager"
import Nav from "./component/nav"
import Main from "./page/main"
import myTASKS from "./service/taskManager"
import TaskContext from "./context/taskContext"
function App() {
  // const myTasks = new TaskManager()

  return (
    <div className="bg-[#000000] text-neutral-50">
     <header>
       <Nav />
       <TaskContext.Provider value={myTASKS}>
          <Main />
       </TaskContext.Provider>
     </header>
    </div>
  )
}

export default App
