import { useState } from "react";
import Button from "./Button.jsx";

const INIT_NUMBER = 0;

const useIncreaseNumber = () => {
  const [count, setCount] = useState(INIT_NUMBER);

  function handleIncreaseClick() {
    setCount((prev) => prev + 1);
  }

  function handleResetClick() {
    setCount(INIT_NUMBER);
  }

  return {
    count,
    handleIncreaseClick,
    handleResetClick,
  };
};

function Counter() {
  const { count, handleIncreaseClick, handleResetClick } = useIncreaseNumber();
  return (
    <div>
      <p>클릭 횟수: {count}</p>
      <Button onClick={handleIncreaseClick}>증가</Button>
      <Button onClick={handleResetClick}>초기화</Button>
    </div>
  );
}

export default Counter;
