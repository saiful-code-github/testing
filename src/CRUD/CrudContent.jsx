import { CContainer } from "@coreui/react";
import { useContext } from "react";
import { CrudContextData } from "./CrudContext";
import CrudData from "./CrudData";
import NewInput from "./NewInput";

const CrudContent = () => {
    const {loading, err, handleScroll, scroll } = useContext(CrudContextData);
    return (
        <section className="mt-4">
             <CContainer fluid>
                   <h1 className="text-center font-bold capitalize bg-linear-90 to-sky-700 via-blue-700 from-black" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text"}}>Crud Operation</h1>
                   {loading && <p className="text-center font-bold">Loading....</p>}
                   {err && <p className="text-center text-red-700 font-bold">{err}</p>}
                   {/* new input form */}
                   <NewInput/>
                   {/* content data  */}
                   <table className="w-full border-1 p-2 mt-3">
                       <thead>
                            <tr>
                                <th className="border-1 p-2">Id</th>
                                <th className="border-1 p-2">Category</th>
                                <th className="border-1 p-2">Title</th>
                                <th className="border-1 p-2">Description</th>
                                <th className="border-1 p-2">Image</th>
                                <th className="border-1 p-2">Price</th>
                                <th className="border-1 p-2">Rating</th>
                                <th className="border-1 p-2">Edit</th>
                                <th className="border-1 p-2">Delete</th>
                            </tr>
                       </thead>
                       {/* dynamic content */}
                       <CrudData/>
                   </table>
             </CContainer>
             {/* scrolll top to bottom */}
             <div>
                {scroll && (
                     <button onClick={handleScroll} className="bg-red-700 text-white w-[45px] h-[45px] rounded shadow-2xl fixed bottom-[15px] right-[15px] z-50"><i className="bi bi-arrow-up"/></button>
                )} 
             </div>
        </section>
    )
}
export default CrudContent;