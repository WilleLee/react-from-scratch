import Counter from "./components/Counter.jsx";

const counters = [
  {
    id: 1,
    title: "첫 번째 카운터",
    initialCount: 0,
  },
  {
    id: 2,
    title: "두 번째 카운터",
    initialCount: 10,
  },
];

function App() {
  return (
    <div>
      <h1>Hello React with JSX!</h1>
      {counters.map((counter) => (
        <section key={counter.id}>
          <h2>{counter.title}</h2>
          <Counter initialCount={counter.initialCount} />
        </section>
      ))}
    </div>
  );
}

export default App;
