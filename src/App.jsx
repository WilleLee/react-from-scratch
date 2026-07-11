import { useState } from "react";
import CounterSection from "./components/CounterSection.jsx";
import AddCounterForm from "./components/AddCounterForm.jsx";
import CounterList from "./components/CounterList.jsx";

const INITIAL_COUNTERS = [
  {
    id: 1,
    title: "첫 번째 카운터",
    description: "기본 카운터입니다.",
    initialCount: 0,
  },
  {
    id: 2,
    title: "두 번째 카운터",
    initialCount: 10,
  },
];

function App() {
  const [counters, setCounters] = useState(INITIAL_COUNTERS);

  function handleAddCounter(title) {
    const nextCount = {
      id: Date.now(),
      title,
      description: "사용자가 추가한 카운터입니다",
      initialCount: 0,
    };
    setCounters((prevCounters) => [...prevCounters, nextCount]);
  }

  function handleRemoveCounter(id) {
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.id !== id),
    );
  }

  return (
    <div>
      <h1>Hello React with JSX!</h1>
      <AddCounterForm onAdd={handleAddCounter} />
      <CounterList onRemove={handleRemoveCounter} counters={counters} />
    </div>
  );
}

export default App;
