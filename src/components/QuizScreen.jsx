import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import Buttons from "./buttons";

function QuizScreen({ question, onQuit, onOptionClick, current, total }) {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setTimer(10);
    const id = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [question]);

  useEffect(() => {
    if (timer === 0) {
      onOptionClick(null);
    }
  }, [timer, onOptionClick]);

  return (
    <div className="min-h-screen bg-[#FBF6EA] flex pt-20">
      
      {/* LEFT SIDEBAR */}
      <Buttons current={current} total={total} />

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col px-16">

        {/* TOP — TIMER */}
        <div className="max-w-4xl pt-6 pb-8">
          <div className="timer-bar">
            <div
              className={`timer-progress ${timer <= 3 ? "low" : ""}`}
              style={{ width: `${(timer / 10) * 100}%` }}
            />
          </div>
          <p className="mt-2 font-bold">Time left: {timer}s</p>
        </div>

        {/* CENTER — QUESTION CARD */}
        <div className=" flex justify-center">
          <div className="w-full max-w-4xl border-2 rounded-2xl px-14 py-6">

            <QuestionCard
              key={current}
              question={question}
              onOptionClick={onOptionClick}
            />
          </div>
        </div>

        {/* BOTTOM — QUIT BUTTON */}
        <div className="pb-10 flex justify-end max-w-4xl">
          <button
            onClick={onQuit}
            className="bg-[#3229D0] text-white px-10 py-2 rounded-full"
          >
            Quit Quiz
          </button>
        </div>

      </div>
    </div>
  );
}

export default QuizScreen;
