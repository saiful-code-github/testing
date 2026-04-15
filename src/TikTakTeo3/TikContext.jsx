import { createContext, useState } from "react";

export const TikTakTeoContext = createContext();
const TikContext = ({children}) => {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [isTurnX, setIsTurnX] = useState(true);
    const [winner, setWinner] = useState(null);
    const [combination, setCombination] = useState([]);
    const winnerCombination = (square) => {
        let winnerCombo = [
             [0,1,2],[3,4,5],[6,7,8],
             [0,4,8],[2,4,6],[0,3,6],
             [1,4,7],[2,5,8]
        ]
        for (let i = 0; i < winnerCombo.length; i++) {
            const [a,b,c] = winnerCombo[i];
            if(square[a] && square[a] === square[b] && square[a] === square[c]){
                setCombination([a,b,c])
                return square[a]
            }
        }
        return null;
    }
    const handleClick = (index) => {
        if(square[index] || winner){
            return
        }
        const newSquare = [...square]
        newSquare[index] = isTurnX ? "X" : "O";
        setSquare(newSquare);
        setIsTurnX(!isTurnX);
        // winner result
        const result = winnerCombination(newSquare);
        if(result) {
            setWinner(result)
        }
    }
    const handleReset = () => {
        setSquare(Array(9).fill(null));
        setIsTurnX(true);
        setWinner(null);
        setCombination([]);
    }
    return (
        <TikTakTeoContext.Provider value={{square, isTurnX, winner, handleClick, handleReset,combination}}>
               {children}
        </TikTakTeoContext.Provider>
    )
}
export default TikContext;