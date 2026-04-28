import { createContext, useEffect, useState } from "react";
import { Todo2Indo } from "./Todo2Info";

export const Todo2DataContext = createContext();
const Todo2Context = ({children}) => {
    const [laoding, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [todo, setTodo] = useState([]);
    // new todo state
    const [newTodo, setNewTodo] = useState({
         title: "",
         name: "",
         marks: "",
         grade: ""
    })
    const [editId, setEditId] = useState(null);
    // find todo State
    const [findInput, setFindInput] = useState("");
    const [findTodo, setFindTodo] = useState([]);
    const [search, setSearch] = useState(false);
    // filter todo state
    const [filterInput, setFilterInput] = useState("");
    const [filterTodo, setFilterTodo] = useState([]);
    // pass fail todo state
    const [passFail, setPassFail] = useState("all");
    const [passFailTodo, setPassFailTodo] = useState([])
    // scroll top to bottom state
    const [isScrollTop, setIsScrollTop] = useState(false);
    // getData
    const getData = () => {
        setLoading(true);
        setErr(false)
        try {
            setTodo(Todo2Indo);
            setFilterTodo(Todo2Indo);
            setPassFailTodo(Todo2Indo);
            console.log(Todo2Indo);
            setLoading(false);
        } catch (error) {
           console.log(error); 
           setErr("Data are faild", err);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
       getData();
    },[])
    const hanldeDelete = (id) => {
        try {
           const remove = todo.filter((item)=> item.id !== id);
           setTodo(remove);
           setFilterTodo(()=> filterTodo.filter((item)=> item.id !== id))
           alert("Delete Successful!") 
        } catch (error) {
            console.log(error)
        }
    }
    const handleNewTodo = (e) => {
        const {name, value} = e.target;
        setNewTodo((prev)=>({
            ...prev,
            [name] : value
        }))
    }
    const addTodo = () => {
        const {title, name, marks, grade} = newTodo;
        if(!title || !name || !marks || !grade){
            return alert("Please fill the all input")
        }
        try {
           const newData = {
               ...newTodo,
               id:todo.length + 1
           } 
           setTodo([...todo, newData]);
           setFilterTodo([...todo, newData])
           resetState();
        } catch (error) {
            console.log(error);
            setErr("Add Data are failed", err)
        }
    }
    const updateData = () => {
     const {title, name, marks, grade} = newTodo;
     if(!title || !name || !marks || !grade){
        return alert("please fill the all input field");
     }
        try {
            const updateTodo = todo.map((item)=> item.id === editId ? {...item, ...newTodo} : item);
            setTodo(updateTodo);
            setFilterTodo(()=> filterTodo.map((item)=> item.id ===  editId ? {...item, ...newTodo} : item));
            setPassFailTodo(()=> passFailTodo.map((item)=> item.id === editId ? {...item, ...newTodo} : item))
            resetState();
        } catch (error) {
            console.log(error);
            setErr("Update data are faild", err)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editId){
            updateData()
        }else{
            addTodo();
        }
    }
    const handleEdit = (item) => {
        setEditId(item.id);
        setNewTodo(()=>({
            ...item,
            marks: Number(item.marks)
        }))
    }
    const resetState = () => {
        setEditId(null);
        setNewTodo({
            title: "",
            name: "",
            marks: "",
            grade: ""
        })
    }
    const handleFindInput = (e) => {
        const value = e.target.value;
        setFindInput(value);
    }
    const handleFindTodo = (e) => {
        e.preventDefault();
        if(!findInput){
            return alert("please fill the input field")
        }
          const value = Number(findInput);
          setFindInput(value);
          const findResult = todo.filter((item)=> item.id === value);
          setFindTodo(findResult);
           setSearch(true)
          setFindInput("")
    }
    const handleFindRemove = (id) => {
        const remove = findTodo.filter((item)=> item.id  !== id);
        setFindTodo(remove);
        alert("Delete Successful!")
    }
    const handleFilter = (e) => {
        const value = e.target.value.toLowerCase();
        setFilterInput(value);
        const filterResult = filterTodo.filter((item)=> item.name.toLowerCase().includes(value));
        setTodo(filterResult);
    }
    const handlePassFail = (e) => {
        const value = e.target.value;
        setPassFail(value);
        if(value === "all"){
             setTodo(passFailTodo);
        }else if(value === "pass"){
             const pass = passFailTodo.filter((item)=> item.marks >= 50)
             setTodo(pass);
        }else if(value === "fail"){
            const fail = passFailTodo.filter((item)=> item.marks < 50)
            setTodo(fail);
        }
    }
    const handleScroll = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }  
    const handleScrollToBottom = () => {
        if(document?.body?.scrollTop || document?.documentElement?.scrollTop > 100){
            setIsScrollTop(true)
        }else{
            setIsScrollTop(false)
        }
    }
    useEffect(()=>{
       window.addEventListener('scroll', handleScrollToBottom);
       return () => window.removeEventListener('scroll', handleScrollToBottom);
    },[])
    return (
        <Todo2DataContext.Provider value={{laoding, err, todo, hanldeDelete, newTodo, handleNewTodo, handleSubmit,editId, handleEdit, findInput, handleFindInput, handleFindTodo, findTodo, handleFindRemove, search, filterInput, handleFilter, passFail, handlePassFail, handleScroll, isScrollTop}}>
            {children}
        </Todo2DataContext.Provider>
    )
}
export default Todo2Context;