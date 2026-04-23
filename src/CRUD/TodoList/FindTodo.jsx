import { useContext } from "react";
import ButtonComponents from "../ButtonComponents";
import { TodoDataContext } from "./TodoContext";

const FindTodo = () => {
    const {findTodo, setFindTodo, handleFindTodo, findData, search,handleRemove} = useContext(TodoDataContext);
    return (
        <div className="max-w-[350px] w-full flex flex-col justify-start items-start my-3 bg-white p-2 rounded shadow-2xl"> 
            <h5 className="font-semibold bg-linear-90 to-sky-600 via-blue-700 from-blue-200" style={{WebkitTextFillColor: "transparent" , WebkitBackgroundClip: "text", fontWeight: "700"}}>Find Todo</h5>
            <div className="form_group flex">
               <input type="text" id="find" value={findTodo} onChange={(e) => setFindTodo(e.target.value)} className="form_input input2" placeholder="Find Your Id:"/>
               <label htmlFor="find" className="form_floting">Find Your Id:</label>
               <ButtonComponents  onclick={handleFindTodo} type="submit" text="Find Todo" className="bg-blue-700 text-white py-[6px] px-[15px]"/>
            </div>
            {/* data show */}
            {findData && findData.length > 0 ? (
                 <div>
                    {findData.map((item, index)=> (
                        <div key={index}>
                            <span className="text-green-600">✅ <strong>{item.id}</strong> {item.name} - {item.marks} - <strong>({item.grade})</strong> - 
                               <button onClick={()=> handleRemove(item.id)} className="text-red-600 font-bold mx-3"> Remove</button>
                             </span>
                        </div>
                    ))}
                 </div>
            ) : search ? (
                <p>❌ Find data are not show</p>
            ) : null}
        </div>
    )
}
export default FindTodo;