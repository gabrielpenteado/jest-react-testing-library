import { useState } from "react";
import Button from "./components/Button";

type InitialCountProps = {
  initialCount: number;
  color: string;
};

function Counter({ initialCount, color }: InitialCountProps) {
  const [count, setCount] = useState(initialCount);
  const [numberColor, setNumberColor] = useState(color);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prevState) => prevState * -1);
  };
  const switchColor = () => {
    numberColor === "#646cff"
      ? setNumberColor("black")
      : setNumberColor("#646cff");
  };

  return (
    <div>
      <h1>
        Count:{" "}
        <div
          data-testid="count"
          style={{ color: numberColor, padding: "20px" }}
        >
          {count}
        </div>
      </h1>
      <div className="buttons">
        {/* <button onClick={increment}> Increment</button> */}
        <Button onClick={increment}> Increment</Button>
        <Button onClick={decrement}> Decrement</Button>
        <Button onClick={restart}> Restart</Button>
        <Button onClick={switchSigns}> Switch Signs</Button>
        <Button onClick={switchColor}> Switch Color</Button>
      </div>
    </div>
  );
}

export default Counter;
