import { useContext } from "react";
import { Todo2DataContext } from "./Todo2Context";

const ScrollToptoBottom = () => {
    const {handleScroll, isScrollTop} = useContext(Todo2DataContext);
    return (
        <div>
            {isScrollTop && (
               <button onClick={handleScroll} className="fixed bottom-[0px] right-[45px] z-50 bg-red-700 text-white text-2xl w-[45px] h-[45px] flex justify-center items-center"><i className="bi bi-arrow-up"/></button>
            )}
        </div>
    )
}
export default ScrollToptoBottom;