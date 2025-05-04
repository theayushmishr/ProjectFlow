// import TaskManager from "./service/taskManager"
import Nav from "./component/nav"
import Main from "./page/main"
function App() {
  // const myTasks = new TaskManager()

  return (
    <div className="bg-[#000000] text-neutral-50">
     <header>
       <Nav />
       <Main />
     </header>
    </div>
  )
}

export default App
