import { useContext } from "react";
import { CrudContextData } from "./CrudContext";
import ButtonComponents from './ButtonComponents';

const CrudData = () => {
    const {todo, handleDelete, handleEdit, handleRating} = useContext(CrudContextData);
    return (
        <tbody>
            {todo.map((item, index)=>{
                const {id,category, description, image, price, rating, title} = item;
                return (
                    <tr key={index}> 
                        <td className="border-1 p-2 w-[1%]"><b className="font-bold text-orange-700">{id}</b></td>
                        <td className="border-1 p-2 w-[5%]">{category}</td>
                        <td className="border-1 p-2 w-[5%]">{title}</td>
                        <td className="border-1 p-2 w-[15%]">{description}</td>
                        <td className="border-1 p-2 w-[10%]">
                            <img src={image} alt="" className="w-[100px] h-[80px] object-contain"/>
                        </td>
                        <td className="border-1 p-2 w-[2%]">$ {price}</td>
                        <td className="border-1 p-2 w-[4%]">{handleRating(rating?.rate || rating)}</td>
                       {/* button map */}
                       <td className="border-1 p-2 w-[2%]">
                           <ButtonComponents type="sumbit" onclick={()=> handleEdit(item)} text="Edit" className="text-blue-700 font-bold"/>
                       </td>
                         <td className="border-1 p-2 w-[2%]">
                           <ButtonComponents onclick={()=> handleDelete(id)} text="Delete" className="text-red-700 font-bold"/>
                       </td>
                    </tr>
                )
            })}
        </tbody>
    )
}
export default CrudData;