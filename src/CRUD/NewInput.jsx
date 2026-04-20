import { useContext } from "react";
import { InputInfo } from "./InputInfo";
import { CrudContextData } from "./CrudContext";
import ButtonComponents from "../ButtonComponents";

const NewInput = () => {
    const {newTodo, handleChange, handleSubmit, editId} = useContext(CrudContextData);
    return (
       <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded p-3 flex justify-center items-center mx-auto flex-col max-w-[500px]">
         <h4 className="text-start flex justify-start" style={{float: "left"}}>{editId ? "Edit Todo" : "New Todo"}</h4>
        {InputInfo.map((item, index)=>(
           <div className="from_group" key={index}>
                  <input type={item.type} name={item.name} id={item.name} value={newTodo[item.name]} onChange={handleChange} placeholder={item.placeholder} className="from_input"/>
                  <label htmlFor={item.name} className="from_floting">{item.placeholder}</label>
            </div>
        ))}
        {/* submit button */}
        <ButtonComponents type="submit" text={editId ? "Update Todo" : "Add Todo"} className={`bg-blue-700 font-semibold capitalize text-white py-[7px] px-[25px] w-full mt-2 ${editId ? "bg-orange-700" : "bg-blue-700"}`}/>
       </form>
    )
} 
export default NewInput;