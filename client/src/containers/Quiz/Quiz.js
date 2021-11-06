import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.module.css";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "Какого цвета небо ?",
        rightAnswerId: 2,
        answers: [
          { text: "Чёрный", id: 1 },
          { text: "Синий", id: 2 },
          { text: "Красный", id: 3 },
          { text: "Зеленый", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    console.log("ans id", answerId);
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
