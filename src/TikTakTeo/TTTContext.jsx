import { createContext, useState } from "react";

export const ContextData = createContext();

const TTTContext = ({ children }) => {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [combination, setCombination] = useState([]);
    // winner condition
    const winnerCombinatio = (square) => {
         let winnerCombo = [
             [0,1,2],[3,4,5],[6,7,8],
             [0,4,8],[2,4,6],[0,3,6],
             [1,4,7],[2,5,8]
         ]
         for (let i = 0; i < winnerCombo.length; i++) {
            const [a,b,c] = winnerCombo[i];
            if(square[a] && square[a] === square[b] && square[b] === square[c]){
                setCombination([a,b,c]);
                 return square[a]
            }
         }
         return null;
    }
    const handleClick = (id) => {
        if(square[id] || winner){
            return
        }
        const newSquare = [...square];
        newSquare[id] = isXTurn ? "X" : "O"
        setSquare(newSquare);
        setIsXTurn(!isXTurn);
        // winner result
        const result = winnerCombinatio(newSquare);
        if(result) {
             setWinner(result)
        }
    }
    // handleReset
    const handleReset = () => {
        setSquare(Array(9).fill(null));
        setIsXTurn(true);
        setWinner(null);
        setCombination([]);
    }
    return (
        <ContextData.Provider 
            value={{ 
                square, 
                setSquare, 
                isXTurn, 
                setIsXTurn, 
                winner, 
                setWinner,
                handleClick,
                handleReset,
                combination
            }}
        >
            {children}
        </ContextData.Provider>
    );
};

export default TTTContext;