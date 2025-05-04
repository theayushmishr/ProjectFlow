import Button from "../component/primaryButton"
import SecondaryButton from "../component/secondaryButton"
import { PlusIcon,DownloadIcon} from "@radix-ui/react-icons"

const Header = ()=>{
    return(
        <div className=" sm:flex justify-between items-center">
        <div className="">
         <h1 className="text-3xl">Zen Task</h1>
         <p className="text-xs py-2 font-[Inter] font-extralight tracking-wider ">Track, organize, and complete your tasks</p>
       </div>
       <div  className="py-3 sm:py-0 flex gap-2">
        <Button Icon={PlusIcon} text={"New Task"} onClickFunction={()=>{}}/>
        <SecondaryButton Icon={DownloadIcon} text={"Export"} onClickFunction={()=>{}}/>   
       </div>
       </div>
    )
}

export default Header