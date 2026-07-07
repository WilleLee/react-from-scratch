import { useState } from "react";

const INIT_NUMBER = 0;

function useCounter() {
  const [count, setCount] = useState(INIT_NUMBER);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function reset() {
    setCount(INIT_NUMBER);
  }

  return {
    count,
    increase,
    reset,
  };
}

export default useCounter;
