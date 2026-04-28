import { useContext } from 'react';
import './input.css';
import { InputInfo } from './InputInfo';
import { Todo2DataContext } from './Todo2Context';
import ButtonComponents from './ButtonComponents';
const NewTodo = () => {
    const {newTodo, handleNewTodo, handleSubmit,editId} = useContext(Todo2DataContext);
    return (
        <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-white shadow-2xl rounded p-2 my-[20px]">
            <h5 className="bg-linear-90 to-sky-700 via-blue-700 from-sky-300" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", fontSize: "20px", fontWeight: "600"}}>{editId ? "Edit Todo" : "Add New Todo"}</h5>
                 {InputInfo.map((field, index)=>(
                    <div className='form_group' key={index}>
                    <input type={field.type} name={field.name} onChange={handleNewTodo} value={newTodo[field.name]} className='form_input' placeholder={field.placeholder}/>
                    <label htmlFor={field.name} className='form_floting'>{field.placeholder}</label>
                    </div>
                 ))}
                 {/* submit button */}
                 <ButtonComponents type="submit" text={editId ? "Update Todo" : "Add Todo"} className={` ${editId ? "bg-orange-700" : "bg-blue-700"} text-white py-[5px] w-full my-[10px]`}/>
        </form>
    )
}
export default NewTodo;