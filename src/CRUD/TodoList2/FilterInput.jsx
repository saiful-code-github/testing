import { useContext } from "react";
import { Todo2DataContext } from "./Todo2Context";

const FilterInput = () => {
    const {filterInput,handleFilter} = useContext(Todo2DataContext);
    return (
        <div className="max-w-[400px] mx-auto bg-white rounded shadow-2xl p-2 my-[20px]">
            <h5 className="bg-linear-90 via-orange-700 from-sky-700 to-blue-700" style={{WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text"}}>Filter Todo</h5>
            <div className="form_group">
                <input type="text" name="filter" id="filter" value={filterInput} onChange={handleFilter} className="form_input" placeholder="Filter Your Todo:"/>
                <label htmlFor="filter" className="form_floting">Filter Your Todo:</label>
            </div>
        </div>
    )
}
export default FilterInput;