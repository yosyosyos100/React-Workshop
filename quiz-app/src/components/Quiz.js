import QuestionData from "../data/QuestionData";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../App";
const Quiz = () => {
  console.log(QuestionData);

  const [current, setCurrent] = useState(0);
  const { score, setScore, setAppState } = useContext(DataContext);
  const [selectChoice, setSelectChoice] = useState("");
  const checkAnswer = () => {
    if (selectChoice == "") return;
    if (selectChoice === QuestionData[current].answer) {
      setScore(score + 1);
      nextQuestion();
    } else {
      nextQuestion();
    }
  };
  const nextQuestion = () => {
    setSelectChoice("");
    if (current === QuestionData.length - 1) {
      setAppState("score");
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    checkAnswer();
  }, [selectChoice]);
  return (
    <div className="quiz">
      <h1>{QuestionData[current].question}</h1>
      <div className="options">
        <button
          onClick={() => {
            setSelectChoice("A");
          }}
        >
          {QuestionData[current].A}
        </button>
        <button
          onClick={() => {
            setSelectChoice("B");
          }}
        >
          {QuestionData[current].B}
        </button>
        <button
          onClick={() => {
            setSelectChoice("C");
          }}
        >
          {QuestionData[current].C}
        </button>
        <button
          onClick={() => {
            setSelectChoice("D");
          }}
        >
          {QuestionData[current].D}
        </button>
      </div>
      <p>
        {current + 1} / {QuestionData.length}
      </p>
      <p>{selectChoice}</p>
    </div>
  );
};

export default Quiz;