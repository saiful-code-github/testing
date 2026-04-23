
import TodoContext from "./TodoContext";
import TodoInfo from "./TodoInfo";

const TodoApp = () => {
    return (
        <TodoContext>
            <TodoInfo/>
        </TodoContext>
    )
}
export default TodoApp;