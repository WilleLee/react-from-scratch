import { useState } from "react";

function AddCounterForm({ onAdd }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nextTitle = title.trim();

    if (!nextTitle) {
      return;
    }

    onAdd(nextTitle);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="카운터 제목을 입력하세요."
      />
      <button type="submit">제출</button>
    </form>
  );
}

export default AddCounterForm;
