import Button from "./Button";
import Counter from "./Counter";

function CounterSection({ title, initialCount, description, onRemove }) {
  return (
    <section>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <Counter initialCount={initialCount} />
      <Button onClick={onRemove}>삭제</Button>
    </section>
  );
}

export default CounterSection;
