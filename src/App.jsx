import { useState } from "react";
import Counter from "./components/Counter.jsx";
import CounterSection from "./components/CounterSection.jsx";

const counters = [
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
  const [title, setTitle] = useState("");
  const [submittedTitle, setSubmittedTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedTitle(title);
    setTitle("");
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
      <p>입력 중인 제목: {title}</p>
      <p>제출된 제목: {submittedTitle}</p>
      {counters.map((counter) => (
        <CounterSection key={counter.id} {...counter} />
      ))}
    </div>
  );
}

export default App;
