import { MagnifyingGlassIcon, AvatarIcon, CircleIcon} from '@radix-ui/react-icons'



const Nav = ()=> {
    return(
        <nav className="flex justify-between py-4 px-4 ">
           <div className=" flex items-center">
             <a href="" className='text-base  sm:text-xl font-[Inter] flex gap-1 justify-center items-center'>
                <CircleIcon className='size-5'/> 
                 <span className=''>Zen</span>
             </a>
           </div>
           <div className=''>
             <ul className='flex items-center gap-2'>
                <li className='flex  border-1 border-neutral-800 py-1 px-2 rounded-2xl'>
                    <input className=' text-xs focus:outline-none' id='search' placeholder='search'></input>
                    <label htmlFor="search">
                        <MagnifyingGlassIcon className='size-5'/>
                    </label>
                </li>
                <li className=''>
                    <AvatarIcon className='size-6'/>
                </li>
             </ul>
             {/* <div className='flex items-center'>
                <Bars3BottomRightIcon className="size-6 block sm:hidden"/>

             </div> */}
           </div>
        </nav>
    )
}
export default Nav
