import { useState } from "react";

const DEFAULT_INIT_COUNT = 0;

function useCounter(initCount = DEFAULT_INIT_COUNT) {
  const [count, setCount] = useState(initCount);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(initCount);
  }

  return {
    count,
    increase,
    decrease,
    reset,
  };
}

export default useCounter;
