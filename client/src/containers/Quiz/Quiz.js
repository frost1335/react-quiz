import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import classes from "./Quiz.module.css";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: "Какого цвета небо ?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Чёрный", id: 1 },
          { text: "Синий", id: 2 },
          { text: "Красный", id: 3 },
          { text: "Зеленый", id: 4 },
        ],
      },
      {
        question: "В каком году основали Санкт-Петербург ?",
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: "1700", id: 1 },
          { text: "1705", id: 2 },
          { text: "1702", id: 3 },
          { text: "1803", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    console.log("ans id", answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
