const TikTakTeoInfo = ({handleClick, combination, isGameOver, square}) => {
    return (
       <div>
          {Array(3).fill(null).map((_, rowIndex) => (
                <div
                    key={rowIndex}
                    className="flex justify-center items-center gap-1 mb-1 mx-auto"
                >
                    {Array(3).fill(null).map((_, colIndex) => {
                        const index = rowIndex * 3 + colIndex;
                        const value = square[index];
                        const isCombination = combination.includes(index);

                        return (
                            <div key={colIndex} className="flex justify-center items-center">
                                <button
                                    onClick={() => handleClick(index)}
                                    disabled={isGameOver}
                                    className={`w-[100px] h-[100px] font-bold border border-gray-500 flex justify-center items-center
                                    ${value === "X"
                                            ? "text-blue-600"
                                            : value === "O"
                                            ? "text-red-600"
                                            : ""
                                        }
                                    ${isCombination ? "bg-green-500 text-white" : "bg-white"}
                                    ${isGameOver ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
                                    `}
                                    style={{ fontSize: "2rem" }}
                                >
                                    {value}
                                </button>
                            </div>
                        );
                    })}
                </div>
            ))}
       </div>    
    )
}
export default TikTakTeoInfo;