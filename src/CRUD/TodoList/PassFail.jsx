import { useContext } from "react";
import { TodoDataContext } from "./TodoContext";

const PassFail = () => {
    const {passFail, handlePassFail} = useContext(TodoDataContext);
    return (
       <div className="max-w-[350px] w-full mx-auto bg-white shadow-2xl rounded p-2 my-3">
           <h5 className="bg-linear-90 via-sky-700 from-blue-700 to-sky-200" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text"}}>Pass Fail Todo</h5>
           <select value={passFail} onChange={handlePassFail} className="w-[50%] border-1 border-sky-400 p-2 outline-0 cursor-pointer">
                <option value="all">All</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
           </select>
       </div>
    )
}
export default PassFail;