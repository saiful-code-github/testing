import { createContext, useEffect, useState } from "react";
import { deleteApi, getApi, postApi, putApi } from "./CrudApi";

export const CrudContextData = createContext();
const CrudContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [todo, setTodo] = useState([]);
    // post state
    const [newTodo, setNewTodo] = useState({
        category: "",
        title: "",
        description: "",
        image: "",
        price: "",
        rating: ""
    });
    const [editId, setEditId] = useState(null);
    const [scroll, setScroll] = useState(false);
    // get data todo
    const getTodo = async () => {
        setLoading(true);
        setErr(false);
        try {
            const res = await getApi();
            if (res.status === 200) {
                setTodo(res.data);
                setLoading(false);
                console.log(res.data);
            }
        } catch (error) {
            console.log(error);
            setErr("Fetch data failed", error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getTodo();
    }, [])
    // handleDelete
    const handleDelete = async (id) => {
        try {
            const res = await deleteApi(id);
            if (res.status === 200) {
                const removeItem = todo.filter(item => item.id !== id);
                setTodo(removeItem);
                alert("Delete successful");
            }
        } catch (error) {
            alert("Delete failed", error);
        }
    }
    // handleChange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTodo(prev => ({ ...prev, [name]: value }))
    }
    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            updateTodo();
        } else {
            addTodo();
        }
    }
    // add todo
    const addTodo = async () => {
        const {category, title, description, image, price, rating} = newTodo;
         if(!category?.trim() || !title?.trim() || !description?.trim() || !image?.trim() || !price?.trim() || !rating?.trim()){
            return alert("please fill all the fields")
         }
        try {
            const res = await postApi(newTodo);
            if (res.status === 200 || res.status === 201) {
                const newData = {
                    ...newTodo,
                    id: todo.length + 1
                }
                setTodo([...todo, newData]);
               resetTodo();
            }
        } catch (error) {
            console.log(error)
        }
    }
    // update todo
    const updateTodo = async () => {
        const {category, description, title, price, rating, image} = newTodo;
        if(!category?.trim() || !title?.trim() || !description?.trim() || !image?.trim() || !price || !rating){
            return alert("please fill all the fields")
        }
        try {
            const res = await putApi(editId, newTodo);
            if (res.status === 200) {
                const updateData = todo.map((item) => item.id === editId ? { ...newTodo} : item);
                setTodo(updateData);
                resetTodo();
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const handleScrollTop = () => {
        if (document?.body?.scrollTop || document?.documentElement?.scrollTop > 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScrollTop);
        return () => window.removeEventListener("scroll", handleScrollTop)
    }, [])
    const handleEdit = (item) => {
        setEditId(item.id);
        setNewTodo({
            ...item,
            rating: item?.rating?.rate || item?.rating
        })

    }
    // reset 
    const resetTodo = () => {
        setEditId(null);
        setNewTodo({
            category: "",
            description: "",
            title: "",
            price: "",
            rating: "",
            image: ""
        })
    }
    // handleRating
    const handleRating = (rate) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
         if(rate >= 1){
            stars.push(<i key={i} className="bi bi-star-fill text-orange-400 mr-2"/>)
            rate--;
         }else if( rate > 0.5 ){
             stars.push(<i key={i} className="bi bi-star-half text-orange-400 mr-2"/>);
             rate--;
         }else{
             stars.push(<i key={i} className="bi bi-star text-orange-400 mr-2"/>)
         }
        }
        return stars;
    }
    return (
        <CrudContextData.Provider value={{ loading, err, todo, handleDelete, newTodo, handleChange, handleSubmit, editId, handleScroll, scroll, handleEdit, handleRating }}>
            {children}
        </CrudContextData.Provider>
    )
}
export default CrudContext;