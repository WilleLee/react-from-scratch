import Button from "./Button";
import Counter from "./Counter";

function CounterSection({ title, initialCount, description, onRemove }) {
  return (
    <section>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <Counter initialCount={initialCount} />
      <Button
        onClick={onRemove}
        title="이 카운터를 삭제합니다."
        aria-label="카운터 삭제"
      >
        삭제
      </Button>
    </section>
  );
}

export default CounterSection;
