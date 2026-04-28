import { useContext } from "react";
import { Todo2DataContext } from "./Todo2Context";
import ButtonComponents from "./ButtonComponents";
import { ButtonInfo } from "./Todo2Info";

const TodoContent = () => {
    const {todo, hanldeDelete, handleEdit} = useContext(Todo2DataContext);
    return (
        <div className="max-w-[400px] mx-auto mt-3">
           <ul className="m-0 p-0 bg-white rounded shadow-2xl p-2">
              {todo.map((item, index)=>{
                const {id, grade, marks, name, title} = item;
                const mark = Number(marks) >= 50 ? "✅" : "❌"
                return (
                    <li key={index} className="flex mb-2 gap-4 justify-start items-start" style={{alignItems: "center"}}>
                         <p className="mb-0"><strong className="text-orange-700 text-[20px]">{id}</strong> - {title} - <b>{name}</b> - {marks} - <strong className="text-blue-700">({grade})</strong> - {mark}</p>
                        <div className="flex gap-3 justify-center items-center text-right">
                            {ButtonInfo.map((btn, i)=>(
                                <ButtonComponents onClick={()=> btn.text === "Edit" ? handleEdit(item) : hanldeDelete(id)} type="button" key={i} className={btn.className} text={btn.text}/>
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