import { lazy, Suspense, useContext } from "react";
import { Todo2DataContext } from "./Todo2Context";
import TodoContent from "./TodoContent";
import NewTodo from "./NewTodo";
// import FindTodo from "./FindTodo";
import FilterInput from "./FilterInput";
import PassFail from './PassFail';
import ScrollToptoBottom from "./ScrollToptoBottom";
const Todo2 = () => {
    const {laoding, err} = useContext(Todo2DataContext);
    const FindTodo = lazy(()=> import('./FindTodo'));
    return (
        <div className="max-w-[500px] mx-auto mt-2">
             <h5 className="font-bold bg-linear-90 text-center via-sky-700 from-blue-700 to-sky-200" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", fontSize: "38px", fontWeight: "600"}}>Todo Data List</h5>
             {laoding && <p className="text-center font-bold">Loading....</p>}
             {err && <p className="text-red-700 font-bold text-center">{err}</p>}
             {/* todo list Data */}
             <Suspense fallback={<p className="text-orange-700 font-bold text-center">Loading.....</p>}>
                    <FindTodo/>
             </Suspense>
             <NewTodo/>
             {/* filter todo */}
             <FilterInput/>
             {/* pass fail todo */}
             <PassFail/>
             <TodoContent/>
             {/* scroll top to bottom */}
             <ScrollToptoBottom/>
        </div>
    )
}
export default Todo2;