import { useContext } from "react";
import ButtonComponents from "./ButtonComponents";
import { Todo2DataContext } from "./Todo2Context";

const FindTodo = () => {
    const {findInput, handleFindInput, handleFindTodo, findTodo, handleFindRemove, search} = useContext(Todo2DataContext);
    return (
        <div className="max-w-[400px] mx-auto bg-white shadow-2xl rounded p-2 my-[15px]">
              <h5 className="bg-linear-90 via-orange-700 from-sky-600 to-blue-700" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", fontWeight: "600"}}>Find Todo</h5>
              <div className="form_group">
                  <input type="text" id="find" className="form_input input2" value={findInput} placeholder="Find Your Id:" onChange={handleFindInput}/>
                  <label htmlFor="find" className="form_floting">Find Your Id:</label>
                  <ButtonComponents onClick={handleFindTodo} type="submit" text="Find Todo" className="bg-blue-700 text-white py-[6px] px-[20px]"/>
                  {/* find result */}
                  {findTodo && findTodo.length > 0 ? (
                    <div>
                        {findTodo.map((item, index)=> (
                            <div key={index} className="flex gap-3">
                                <span className="text-green-700">✅ <strong>{item.id}</strong> - {item.name} - <strong>{item.marks}</strong> - <b className="text-blue-700">({item.grade})</b></span>
                                <ButtonComponents onClick={()=> handleFindRemove(item.id)} type="button" text="Remove" className="text-red-700 font-semibold"/>
                            </div>
                        ))}
                    </div>
                  ) : search ? (
                    <div>
                         <p>❌ No Result Found</p>
                    </div>
                  ) : null}
              </div>
        </div>
    )
}
export default FindTodo;