import { useContext } from "react";
import { TiKTakTeoContext } from "./TikContext";

const TikTakTeoData = () => {
    const {square, isTurnX, winner, handleClick, handleReset, combination} = useContext(TiKTakTeoContext);
    // game state check
    const isBoardfull = square.every(cell => cell !== null);
    const isGameOver = winner || isBoardfull;
    return (
        <div className="w-full flex flex-col justify-center items-center mx-auto">
            <h4>
               {winner ? (
                  <>
                     Winner Team is {" "}
                     <span className={winner ? "text-purple-700" : "text-blue-700"}>{winner}</span>
                  </>
               ) : isBoardfull ? (
                 <>
                   <span className="text-yellow-600">Match is Draw 🤝</span>
                 </>
               ) : (
                  <>
                     Next Turn is {" "}
                     <span className={isTurnX ? "text-blue-700" : "text-orange-700"}>{isTurnX ? "X" : "O"}</span>
                  </>
               )}
            </h4>
            {/* new content box */}
            <ul className="grid grid-cols-3 gap-1">
                {Array.from({length: 9}).map((_, index)=>{
                    const value = square[index];
                    const isCombination = combination?.includes(index);
                   return (
                    <div key={index} className="w-[100px] h-[100px]">
                        <button onClick={()=> handleClick(index)} className={`w-[100px] h-[100px] border-1 ${isCombination ? "bg-green-500 border-green-300 text-white" : "bg-white border-gray-500"}`} style={{fontSize: "48px",fontWeight: "700",WebkitTextStroke: "1px orangered"}}>{value}</button>
                    </div>
                   )
             })}
            </ul>
            {/* button reset game */}
            {isGameOver && (
                <button onClick={handleReset} className="bg-red-700 text-white py-[7px] px-[25px] mt-3 flex justify-center items-center mx-auto">Reset Game</button>
            )}
        </div>
    )
}
export default TikTakTeoData;