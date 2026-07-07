import Counter from "./Counter";

function CounterSection({ title, initialCount, description, onRemove }) {
  return (
    <section>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <Counter initialCount={initialCount} />
      <button onClick={onRemove}>삭제</button>
    </section>
  );
}

export default CounterSection;
