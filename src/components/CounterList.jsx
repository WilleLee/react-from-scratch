import CounterSection from "./CounterSection";

function CounterList({ counters, onRemove }) {
  if (counters.length === 0) {
    return <p>아직 카운터가 없습니다.</p>;
  }
  return (
    <>
      {counters.map((counter) => (
        <CounterSection
          key={counter.id}
          {...counter}
          onRemove={() => onRemove(counter.id)}
        />
      ))}
    </>
  );
}

export default CounterList;
