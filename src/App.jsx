import { useState, useEffect } from "react";
import questions from "./data/data";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import Nav from "./components/nav";
import "./App.css";

/* ---------- helper to shuffle options safely ---------- */
function shuffleOptions(question) {
  const correctOption = question.options[question.answer];

  const shuffledOptions = [...question.options].sort(
    () => Math.random() - 0.5
  );

  const newAnswerIndex = shuffledOptions.indexOf(correctOption);

  return {
    ...question,
    options: shuffledOptions,
    answer: newAnswerIndex
  };
}

function App() {
  

  const [screen, setScreen] = useState("start");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);

  /* ---------- READ bestScore once ---------- */
  useEffect(() => {
    const savedBestScore = localStorage.getItem("bestScore");
    if (savedBestScore !== null) {
      setBestScore(Number(savedBestScore));
    }
  }, []);

  /* ---------- RESTORE quiz state on refresh ---------- */
  useEffect(() => {
    const savedState = localStorage.getItem("quizState");

    if (savedState) {
      const parsed = JSON.parse(savedState);

      setScreen(parsed.screen);
      setQuestionIndex(parsed.questionIndex);
      setScore(parsed.score);
      setQuizQuestions(parsed.quizQuestions);
    }
  }, []);

  /* ---------- SAVE quiz state while playing ---------- */
  useEffect(() => {
    if (screen === "quiz") {
      localStorage.setItem(
        "quizState",
        JSON.stringify({
          screen,
          questionIndex,
          score,
          quizQuestions
        })
      );
    }
  }, [screen, questionIndex, score, quizQuestions]);


  function quitQuiz() {
    localStorage.removeItem("quizState");
    localStorage.removeItem("quizTimer");

    setScore(0);
    setQuestionIndex(0);
    setScreen("start");
  }

  /* ---------- START QUIZ ---------- */
  function startQuiz() {
    const shuffledQuestions = [...questions]
      .sort(() => Math.random() - 0.5)
      .map(q => shuffleOptions(q));

    setQuizQuestions(shuffledQuestions);
    setQuestionIndex(0);
    setScore(0);
    setScreen("quiz");
  }

  /* ---------- GUARD ---------- */
  if (screen === "quiz" && quizQuestions.length === 0) {
    return null;
  }

  const currentQuestion = quizQuestions[questionIndex];

  /* ---------- HANDLE ANSWER ---------- */
  function handleOptionClick(selectedIndex) {
    let updatedScore = score;

    if (
      selectedIndex !== null &&
      selectedIndex === currentQuestion.answer
    ) {
      updatedScore = score + 1;
      setScore(updatedScore);
    }

    setTimeout(() => {
      if (questionIndex < quizQuestions.length - 1) {
        setQuestionIndex(prev => prev + 1);
      } else {
        /* update best score BEFORE result screen */
        if (updatedScore > bestScore) {
          setBestScore(updatedScore);
          localStorage.setItem("bestScore", updatedScore);
        }

        localStorage.removeItem("quizState");
        localStorage.removeItem("quizTimer");

        setScreen("result");
      }
    }, 1000);
  }

  /* ---------- RESET ---------- */
  function resetQuiz() {
    localStorage.removeItem("quizState");
    localStorage.removeItem("quizTimer");

    setScore(0);
    setQuestionIndex(0);
    setScreen("start");
  }

  return (
    <>
    <Nav bestScore={bestScore} />
      {screen === "start" && <StartScreen onStart={startQuiz} />}

      {screen === "quiz" && (
        <QuizScreen
          question={currentQuestion}
          onOptionClick={handleOptionClick}
          onQuit={quitQuiz}
          current={questionIndex}
          total={quizQuestions.length}
        />
      )}


      {screen === "result" && (
        <ResultScreen
          score={score}
          total={quizQuestions.length}
          bestScore={bestScore}
          onRestart={resetQuiz}
        />
      )}
    </>
  );
}

export default App;
