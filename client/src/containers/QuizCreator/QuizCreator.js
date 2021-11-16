import React, { Component } from "react";
import classes from "./QuizCreator.module.css";
import Button from "../../components/UI/Button/Button";
import { createControl } from "../../form/formFramework";

const createOptionControl = (number) => {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number,
    },
    { required: true }
  );
};

const createFormControls = () => {
    return {
        question: createControl(
          {
            label: "Введите вопрос",
            errorMessage: "Вопрос не может быть пустым",
          },
          { required: true }
        ),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
      },
}

export class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls()
  };

  render() {
    const submitHandler = (event) => {};

    const addQuestionHandler = () => {};

    const createQuizHandler = () => {};

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={submitHandler}>
            <input type="text" />
            <hr />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />

            <select></select>

            <Button type="primary" onClick={addQuestionHandler}>
              Добавить запрос
            </Button>

            <Button type="success" onClick={createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
