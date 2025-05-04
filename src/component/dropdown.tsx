import { useState } from "react"

interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
    label: string
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect,}) => {
    const [open, setopen] = useState(false)
    const [selected, setselected] = useState<string | null>(null)
    const handleClick = (option: string) => {
        setselected(option);
        setopen(prev => !prev);
        onSelect(option);
    }

    return (
            <div className="min-w-[7em] relative">
                <button onClick={() => setopen(!open)} className="box-border cursor-pointer border-1 border-neutral-800 px-4 py-1 rounded-2xl bg-neutral-900 text-sm">
                    {selected || options[2]}
                </button>
                { open && <ul className="list-none position absolute top-[2.5em] p-3 left-[50%] translate-x-[-50%] z-1 bg-neutral-950 flex flex-col gap-2 rounded-lg">
                    
                        {options.map((option, index) => (
                            <li className="px-4 py-1 hover:bg-neutral-800 border-1 border-neutral-800 rounded-2xl bg-neutral-900 text-sm" key={index} onClick={() => handleClick(option)}>{option}</li>
                        ))}
                    
                </ul>}
            </div >
    )
}
export default Dropdown