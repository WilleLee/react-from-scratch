import Counter from "./Counter";

function CounterSection({ title, initialCount, description }) {
  return (
    <section>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <Counter initialCount={initialCount} />
    </section>
  );
}

export default CounterSection;
