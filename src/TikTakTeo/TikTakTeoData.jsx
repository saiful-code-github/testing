import { useContext } from "react";
import { ContextData } from "./TTTContext";
import TikTakTeoInfo from "./TikTakTeoInfo";

const TikTakTeoData = () => {
    const {
        square,
        isXTurn,
        winner,
        handleClick,
        handleReset,
        combination
    } = useContext(ContextData);

    // Game state check
    const isBoardFull = square.every(cell => cell !== null);
    const isGameOver = winner || isBoardFull;

    return (
        <div className="w-full">

            {/* Winner / Turn Text */}
            <h4 className="text-center font-bold text-3xl mb-4">
                {winner ? (
                    <>
                        Winner Team is{" "}
                        <span className={winner === "X" ? "text-blue-600" : "text-red-600"}>
                            <b>{winner} 🏆</b>
                        </span>
                    </>
                ) : isBoardFull ? (
                    <span className="text-yellow-600 font-bold">
                        Match Draw 🤝
                    </span>
                ) : (
                    <>
                        Next Turn is{" "}
                        <span className={isXTurn ? "text-blue-600" : "text-red-600"}>
                            {isXTurn ? "X" : "O"}
                        </span>
                    </>
                )}
            </h4>

            {/* Board */}
            <TikTakTeoInfo handleClick={handleClick} combination={combination} isGameOver={isGameOver} square={square}/>

            {/* Reset Button */}
            {isGameOver && (
                <button
                    onClick={handleReset}
                    className="text-white bg-red-700 py-[8px] px-[25px] flex justify-center items-center mt-4 mx-auto mb-4 cursor-pointer rounded"
                >
                    Reset Game
                </button>
            )}

        </div>
    );
};

export default TikTakTeoData;