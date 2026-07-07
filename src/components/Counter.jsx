import { useState } from "react";
import Button from "./Button.jsx";
import useCounter from "../hooks/useCounter.js";

function Counter() {
  const { count, increase, reset } = useCounter();
  return (
    <div>
      <p>클릭 횟수: {count}</p>
      <Button onClick={increase}>증가</Button>
      <Button onClick={reset}>초기화</Button>
    </div>
  );
}

export default Counter;
