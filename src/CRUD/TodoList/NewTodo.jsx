import { useContext } from "react";
import { TodoDataContext } from "./TodoContext";
import { NewTodoInfo } from "./NewTodoInfo";
import './newinput.css';
import ButtonComponents from "../ButtonComponents";
const NewTodo = () => {
    const {newTodo, editId, handleNewTodo, handleSubmit} = useContext(TodoDataContext);
    return (
        <form onSubmit={handleSubmit} className="max-w-[350px] w-full mx-auto my-[25px] bg-white shadow-2xl rounded-md p-2">
             <h5 className={editId ? "text-blue-700" : "text-orange-700"}>{editId ? "Edit Todo" : "Add New Todo"}</h5>
             {NewTodoInfo.map((item, index)=>(
                <div key={index} className="form_group">
                  <input type={item.type} id={item.name} name={item.name} value={newTodo[item.name]} onChange={handleNewTodo} name={item.name} className="form_input" placeholder={item.placeholder}/>
                  <label htmlFor={item.name} className="form_floting">{item.placeholder}</label>
                </div>
             ))}
             {/* submit button */}
             <ButtonComponents type="submit" text={editId ? "Update Todo" : "Add Todo"} className={` ${editId ? "bg-orange-700" : "bg-blue-700"} text-white py-[6px] w-full mt-[20px]`}/>
        </form>
    )
}
export default NewTodo;