import { useState } from "react";
import { GoArrowDown, GoArrowLeft } from "react-icons/go";

const ExpandablePanel = ({header, children}) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandedClick = () => {
        setExpanded(!expanded)
    }
  return (
    <div className="mb-2 border rounded mt-3">
            <div className="flex p-2 justify-between items-center ">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div onClick={handleExpandedClick}>
                   {expanded ? <GoArrowDown /> : <GoArrowLeft />}
                </div>
            </div>
           <div className="cursor-pointer">
                {expanded && <div className="p-2 border-t">{children}</div>}
           </div>
    </div>
  )
}

export default ExpandablePanel;