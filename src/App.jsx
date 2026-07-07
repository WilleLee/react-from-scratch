import { useState } from "react";
import CounterSection from "./components/CounterSection.jsx";

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
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nextTitle = title.trim();

    if (!nextTitle) {
      return;
    }

    const nextCount = {
      id: Date.now(),
      title: nextTitle,
      description: "사용자가 추가한 카운터입니다",
      initialCount: 0,
    };

    setCounters((prevCounters) => [...prevCounters, nextCount]);
    setTitle("");
  }

  function handleRemoveCounter(id) {
    setCounters((prevCounters) =>
      prevCounters.filter((counter) => counter.id !== id),
    );
  }

  return (
    <div>
      <h1>Hello React with JSX!</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="카운터 제목을 입력하세요."
        />
        <button type="submit">제출</button>
      </form>
      {counters.map((counter) => (
        <CounterSection
          key={counter.id}
          {...counter}
          onRemove={() => handleRemoveCounter(counter.id)}
        />
      ))}
    </div>
  );
}

export default App;
