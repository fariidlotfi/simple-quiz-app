import "./QuizAppForm.css";

const QuizForm = (params) => {
  return (
    <>
      <div className="quiz-app-form">
        <div className="quiz-app-title">
          <p className="quiz-app-current-question">سوال : {params.currentQuestion}</p>
          <h3>{params.title}</h3>
        </div>
        <div className="quiz-app-answers">{params.children}</div>
      </div>
    </>
  );
};

export default QuizForm;
