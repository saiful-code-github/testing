import { useContext } from "react";
import { TodoDataContext } from "./TodoContext";

const FilterTodo = () => {
    const {filterInput, handleFilter} = useContext(TodoDataContext);
    return (
        <div className="max-w-[350px] w-full mx-auto my-3 bg-white shadow-2xl rounded p-2">
            <h5 className="bg-linear-90 to-sky-700 via-blue-700 from-sky-300" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", fontWeight: "bold"}}>Todo Filter</h5>
             <div className="form_group">
                <input type="text" id="filter" value={filterInput} onChange={handleFilter} placeholder="Enter Your Todo" className="form_input"/>
                <label htmlFor="filter" className="form_floting">Enter Your Todo</label>
             </div>
        </div>
    )
}
export default FilterTodo;