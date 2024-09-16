import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import QuestionData from "../data/QuestionData";
const Score = () => {
  const { score, setScore, setAppState } = useContext(DataContext);
  //   const { QuestionData } = useContext(DataContext);
  const restartApp = () => {
    setScore(0);
    setAppState("menu");
  };
  return (
    <div className="score">
      <h1>สรุปผลคะแนน</h1>
      <h1>
        {score} / {QuestionData.length}
      </h1>
      <button onClick={restartApp}>เริ่มใหม่</button>
    </div>
  );
};

export default Score;