import { useState } from "react";
import ButtonComponents from "./ButtonComponents";
import Count from "./Count";

export const App = () => {
    const [count, setCount] = useState(0);
    const [isIncreasing, setIsIncreasing] = useState(true);

    const handleAction = () => {
        if (isIncreasing) {
            if (count < 10) {
                setCount((prev) => prev + 1);
            } else {
                setIsIncreasing(false); // switch to decreasing
            }
        } else {
            if (count > 0) {
                setCount((prev) => prev - 1);
            } else {
                setCount(0); // reset
                setIsIncreasing(true); // start again
            }
        }
    };

    return (
        <div className="flex gap-2 flex-col justify-center items-center">
            <h1>Single Button Operation</h1>
            <p className="text-3xl font-bold">{count}</p>

            <ButtonComponents
                onclick={handleAction}
                text={
                    isIncreasing
                        ? "Increase"
                        : count > 0
                            ? "Decrease"
                            : "Reset"
                }
                className={
                    isIncreasing
                        ? "bg-green-600"
                        : count > 0
                            ? "bg-yellow-600"
                            : "bg-red-600"
                }
            />
            {/* new count code */}
            <Count/>
        </div>
    );
};

export default App;