const SecondaryButton  = ({Icon,text,onClickFunction = () => {}})=>{
    return(
        <button className="px-3 py-[.125rem] flex items-center bg-neutral-100 text-neutral-950 gap-1 rounded" onClick={onClickFunction}>
            <Icon className="size-4 text-neutral-950" />
            <span className="text-sx pb-1">{text}</span>
        </button>
    )
}
export default SecondaryButton 