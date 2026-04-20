import CrudContent from "./CrudContent";
import CrudContext from "./CrudContext";

const CrudApp = () => {
    return (
        <CrudContext>
            <CrudContent/> 
        </CrudContext>
    )
}
export default CrudApp;