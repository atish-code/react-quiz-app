import { useEffect, useState } from "react";

function QuestionCard({ question, onOptionClick }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleClick(index) {
    setSelectedOption(index);
    onOptionClick(index);
  }

  useEffect(() => {
    setSelectedOption(null);
  }, [question]);

  return (
    <div>
      <h3 className="text-3xl mb-8">
        {question.question}
      </h3>

      <div className="flex flex-col gap-3">
        {question.options.map((item, index) => {
          let extraClass = "";
          let icon = null;

          if (selectedOption !== null) {
            if (index === question.answer) {
              extraClass = "correct-option";
              icon = <span className="icon">✓</span>;
            } else if (index === selectedOption) {
              extraClass = "wrong-option";
              icon = <span className="icon">✗</span>;
            }
          }

          return (
            <button
              key={index}
              disabled={selectedOption !== null}
              onClick={() => handleClick(index)}
              className={`option-btn flex items-center justify-between ${extraClass}`}
            >
              <span>{item}</span>
              {icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionCard;
