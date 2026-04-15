import { useContext } from "react";
import { TikTakTeoContext } from "./TikContext";

const TikTakTeoData = () => {
    const {square, isTurnX, winner, handleClick, handleReset, combination} = useContext(TikTakTeoContext);
    const isBoardFull = square.every(cell => cell !== null);
    const isGameOver = winner || isBoardFull;
    return (
        <div className="w-full">
            <h4 className="text-center">
                {winner ? (
                    <>
                      Winner Team is {" "}
                      <span className={winner ? "text-purple-700" : "text-blue-700"}>{winner}</span>
                    </>
                ): isBoardFull ? (
                    <>
                      <span className="text-green-600 font-medium"> Match is Draw 🤝</span>
                    </>
                ) : (
                    <>
                       Next Team is {" "}
                       <span className={isTurnX ? "text-orange-700" : "text-blue-700"}>{isTurnX ? "X" : "O"}</span>
                    </>
                ) }
            </h4>
            {/* square box content here */}
            {Array(3).fill(null).map((_, rowIndex)=>(
                <div key={rowIndex} className="flex gap-1 mb-1 justify-center items-center mx-auto">
                    {Array(3).fill(null).map((_, colIndx)=>{
                        const index = rowIndex * 3 + colIndx;
                        const value = square[index];
                        const isCombination = combination.includes(index);
                        return (
                          <div key={colIndx} className="w-[100px] h-[100px]">
                            <button disabled={isGameOver} onClick={()=> handleClick(index)} className={`w-[100px] h-[100px] border-1 border-gray-500 ${value === "X" ? "text-orange-700" : value === "O" ? "text-blue-700" : ""} ${isGameOver ? "cursor-not-allowed opacity-70" : "cursor-pointer"} ${isCombination ? "bg-green-600 border-green-400 text-white" : "bg-white"}`} style={{fontSize: "2rem", fontWeight: "700", WebkitTextStroke: "1px black"}}>{value}</button>
                        </div>
                       )
                     })}
                </div>
            ))}
            {/* reset game button */}
            {isGameOver && (
                <button onClick={handleReset} className="bg-red-700 text-white py-[7px] px-[25px] rounded shadow-2xl mt-3 flex justify-center items-center mx-auto">Reset Game</button>
            )}
        </div>
    )
}
export default TikTakTeoData;