import { createContext, useEffect, useState } from "react";
import { TodoData } from "./TodoData";
import NewTodo from './NewTodo';


export const TodoDataContext = createContext();
const TodoContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState({
        title: "",
        name: "",
        marks: "",
        grade: ""
    });
    const [editId, setEditId] = useState(null);
    const [findTodo, setFindTodo] = useState("");
    const [findData, setFindData] = useState([]);
    const [search, setSearch] = useState(false);
    //  filter state
    const [filterInput, setFilterInput] = useState("");
    const [filterTodo, setFilterTodo] = useState([]);
    //pass fail state
    const [passFail, setPassFail] = useState("all");
    const [originalTodo, setOriginalTodo] = useState([]);
    const getData = () => {
        setLoading(true);
        setErr(false)
        try {
            setTodo(TodoData);
            setFilterTodo(TodoData);
            setOriginalTodo(TodoData)
            console.log(TodoData);
            setLoading(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    // remove data 
    const handleDelete = (id) => {
        try {
            const removeData = todo.filter((item) => item.id !== id);
            setTodo(removeData);
            setFilterTodo(()=> filterTodo.filter((item)=> item.id !== id));
            setOriginalTodo(()=> originalTodo.filter((item)=> item.id !== id));
            alert("Delete successful");
        } catch (error) {
            console.log(error);
            setErr("Delete data are faild", err)
        }
    }
    const handleEdit = (item) => {
        setEditId(item.id);
        setNewTodo({
            title: item.title,
            name: item.name,
            marks: item.marks,
            grade: item.grade
        })
    }
    const handleNewTodo = (e) => {
        const { name, value } = e.target;
        setNewTodo((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const addData = () => {
        const { title, name, marks, grade } = newTodo;
        if (!title.trim() || !name.trim() || !marks || !grade.trim()) {
            return alert("please fill the all field")
        }
        try {
            const newData = {
                ...newTodo,
                id: todo.length + 1
            }
            setTodo([...todo, newData]);
            setEditId(null);
            setNewTodo({
                title: "",
                name: "",
                marks: "",
                grade: ""
            })
        } catch (error) {
            console.log(error);
            setErr("Add todo are failed", err)
        }
    }
    const updateData = () => {
        const { title, name, marks, grade } = newTodo;

        if (!title.trim() || !name.trim() || !marks || !grade.trim()) {
            return alert("please fill the all field")
        }

        const updated = todo.map((item) =>
            item.id === editId ? { ...item, ...newTodo } : item
        );

        setTodo(updated);
        setFilterTodo(()=> filterTodo.map((item)=> item.id === editId ? {...item, ...newTodo} : item));
        setOriginalTodo(() => originalTodo.map((item)=> item.id === editId ? {...item, ...newTodo} : item));
        setEditId(null);
        setNewTodo({
            title: "",
            name: "",
            marks: "",
            grade: ""
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            updateData();
        } else {
            addData();
        }
    }
    const handleFindTodo = (e) => {
        e.preventDefault();
        if (!findTodo?.trim()) {
            return alert("please enter your id")
        }
        const id = Number(findTodo)
        const findDataShow = todo.filter((item) => item.id === id);
        setFindData(findDataShow);
        setSearch(true);
        setFindTodo("");
    }
    const handleRemove = (id) => {
        try {
            const removeData = findData.filter(item => item.id !== id);
            setFindData(removeData);
            //  const removeItem = todo.filter(item => item.id !== id);
            //  setTodo(removeItem);
            //  alert("Delete successful");
        } catch (error) {
            console.log(error);
            setErr("Delete data are faild", err);
        }
    }
    const handleFilter = (e) => {
        const value = e.target.value.toLowerCase();
        setFilterInput(value);
        const filterData = filterTodo.filter((item) => item.name.toLowerCase().includes(value));
        setTodo(filterData);
    }
    const handlePassFail = (e) => {
        const value = e.target.value;
        setPassFail(value);
        if (value === "all") {
            setTodo(originalTodo);
        } else if (value === "pass") {
            const pass = originalTodo.filter((item) => item.marks >= 50)
            setTodo(pass);
        } else if (value === "fail") {
            const fail = originalTodo.filter((item) => item.marks < 50)
            setTodo(fail);
        }
    }
    return (
        <TodoDataContext.Provider value={{ loading, err, todo, handleDelete, handleEdit, newTodo, editId, handleNewTodo, handleSubmit, findTodo, setFindTodo, handleFindTodo, findData, search, handleRemove, filterInput, handleFilter, passFail, handlePassFail }}>
            {children}
        </TodoDataContext.Provider>
    )
}
export default TodoContext;