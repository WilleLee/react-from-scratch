import { useState } from "react";
import Button from "./Button.jsx";
import useCounter from "../hooks/useCounter.js";

function Counter({ initialCount = 0 }) {
  const { count, increase, decrease, reset } = useCounter(initialCount);
  return (
    <div>
      <p>클릭 횟수: {count}</p>
      <Button onClick={increase}>증가</Button>
      <Button onClick={decrease}>감소</Button>
      <Button onClick={reset}>초기화</Button>
    </div>
  );
}

export default Counter;
