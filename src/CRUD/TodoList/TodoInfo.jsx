import { useContext } from "react";
import TodoContent from "./TodoContent";
import { TodoDataContext } from "./TodoContext";
import NewTodo from "./NewTodo";
import FindTodo from "./FindTodo";
import FilterTodo from "./FilterTodo";

const TodoInfo = () => {
    const {loading, err} = useContext(TodoDataContext);
    return (
        <div className="max-w-[500px] mx-auto flex flex-col justify-center items-center mt-3">
             <h3 className="text-center  bg-linear-90 to-sky-700 from-blue-700 via-orange-700" style={{WebkitTextFillColor: "transparent" , WebkitBackgroundClip: "text", fontWeight: "700",fontSize: "38px"}}>Todo List</h3>
             {loading && <p className="text-center font-semibold">Loading...</p>}
             {err && <p className="text-center text-red-700 font-semibold">{err}</p>}
             {/* find todo */}
             <FindTodo/>
             {/* new input */}
             <NewTodo/>
             {/* filter todo */}
             <FilterTodo/>
             <TodoContent/>
        </div>
    )
}
export default TodoInfo;