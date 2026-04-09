import { useState } from "react";
import ButtonComponents from "./ButtonComponents";

const Count = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        if(count < 10){
            setCount((prev)=> prev + 1)
        }
    }
    return (
        <div>
            <h3 className="bg-linear-90 to-blue-600 via-orange-700 from-purple-700 bg-clip-text" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", fontSize: "30px", fontWeight: "700"}}>InDe Operation</h3>
            <p className="text-5xl font-bold my-[20px] text-center">{count}</p>
            <div className="flex gap-3 justify-center items-center">
               <ButtonComponents onclick={handleIncrement} type="button" text="+" className="bg-blue-600 font-bold text-white"/>
            </div>
        </div>
    )
}
export default Count;