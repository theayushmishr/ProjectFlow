
const Button  = ({Icon,text,onClickFunction = () => {}})=>{
    return(
        <button className="px-3 py-[.125rem] flex items-center bg-blue-600 gap-1 rounded whitespace-nowrap" onClick={onClickFunction}>
            <Icon className="size-4 text-amber-50 " />
            <span className="text-sx pb-1 ">{text}</span>
        </button>
    )
}
export default Button