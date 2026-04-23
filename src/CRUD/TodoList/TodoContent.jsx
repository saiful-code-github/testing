import { useContext } from "react";
import { TodoDataContext } from "./TodoContext";
import ButtonComponents from "../ButtonComponents";
import { ButtonInfo, TodoData } from "./TodoData";

const  TodoContent = () => {
    const {todo, handleDelete, handleEdit} = useContext(TodoDataContext);
    return (
        <div className="max-w-[500px] w-full flex justify-center items-center">
            <ul>
                {todo.map((item, index)=>{
                    const {id, title, name, marks, grade} = item;
                    const icons = Number(marks) >= 50 ? "✅" : "❌";
                    return (
                         <li key={index} className="bg-white flex gap-6 shadow-2xl p-2 rounded-md mb-2">
                             <span><strong className="text-orange-700 text-[20px]">{id}</strong> - {title} - <strong className="font-semibold text-blue-700">{name}</strong> - <b>{marks} -</b> - <strong className="text-sky-600">({grade}) - {icons} </strong>
                             </span>
                              <div className="flex gap-2">
                                   {ButtonInfo.map((btn, i)=>(
                                      <ButtonComponents type="button" onclick={()=> btn.text === "Edit" ? handleEdit(item) : handleDelete(id)} key={i} text={btn.text} className={btn.className}/>
                                   ))}
                               </div>
                         </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default TodoContent;  