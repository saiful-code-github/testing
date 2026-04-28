import { useContext } from "react";
import { Todo2DataContext } from "./Todo2Context";

const PassFail = () => {
    const {passFail, handlePassFail} = useContext(Todo2DataContext);
    return(
        <div className="max-w-[400px] mx-auto bg-white shadow-2xl rounded p-2 my-[20px]">
             <h5 className="bg-linear-90 to-sky-700 via-orange-700 from-blue-700" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text"}}>Pass Fail Todo</h5>
             <select value={passFail} onChange={handlePassFail} className="mt-2 border-1 w-[30%] p-2 outline-0 cursor-pointer">
                 <option value="all">All</option>  
                 <option value="pass">Pass</option>  
                 <option value="fail">Fail</option>  
             </select>
        </div>
    )
}
export default PassFail;