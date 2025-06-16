import React, { useState } from "react";
import questions from "../questions.json"; // Assuming you have a JSON file with questions

const Question: React.FC = () => {
  const [index, setIndex] = useState<number>(() =>
    Math.floor(Math.random() * questions.length)
  );

  const nextQuestion = () => {
    let newIndex = Math.floor(Math.random() * questions.length);
    while (newIndex === index && questions.length > 1) {
      newIndex = Math.floor(Math.random() * questions.length);
    }
    setIndex(newIndex);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={nextQuestion}
        style={{
          marginTop: "20px",
          padding: "24px 32px",
					fontFamily: "'Silkscreen', sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          cursor: "pointer",
          border: "2px solid black",
          borderRadius: "8px",
					color: "#59ed42",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "pre-line",
        }}
      >
        {questions[index]}
      </button>
    </div>
  );
};

export default Question;
