import { useState } from "react";
import styles from "./App.module.css";
import QuizForm from "./Components/QuizAppForm";

const quiz = [
  {
    id: 1,
    title: "پایتخت کشور کانادا",
    answers: [
      { ansTitle: "اُتاوا", ansValid: true },
      { ansTitle: "تورنتو", ansValid: false },
      { ansTitle: "مونترال", ansValid: false },
      { ansTitle: "ونکوور", ansValid: false },
    ],
  },
  {
    id: 2,
    title: "چند رنگ اصلی وجود دارد؟",
    answers: [
      { ansTitle: "5 رنگ", ansValid: true },
      { ansTitle: "2 رنگ", ansValid: false },
      { ansTitle: "7 رنگ", ansValid: false },
      { ansTitle: "3 رنگ", ansValid: false },
    ],
  },
  {
    id: 3,
    title: "زرشک پلو غذای کدام استان است؟",
    answers: [
      { ansTitle: "کردستان", ansValid: false },
      { ansTitle: "تهران", ansValid: true },
      { ansTitle: "مشهد", ansValid: false },
      { ansTitle: "تبریز", ansValid: false },
    ],
  },
];

const QuizApp = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const answerHandler = (validate) => {
    setCurrent(current + 1);
    if (validate) setScore(score + 1);
  };

  return (
    <>
      <div className={styles.quizappcontainer}>
        {current != quiz.length ? (
          <QuizForm
            key={quiz[current].id}
            title={quiz[current].title}
            currentQuestion={current + 1}
          >
            {quiz[current].answers.map((answer) => (
              <button
                key={Math.floor(Math.random() * 100)}
                onClick={() => answerHandler(answer.ansValid)}
              >
                {answer.ansTitle}
              </button>
            ))}
          </QuizForm>
        ) : (
            <div className={styles.quizAppMessage}>
                <h2>شما <span>{score} </span>  امتیاز به دست آوردید</h2>
                <button onClick={() => {setCurrent(0); setScore(0)}} >شروع مجدد</button>
            </div>
        )}
      </div>
    </>
  );
};

export default QuizApp;
