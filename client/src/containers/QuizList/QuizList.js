import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.css";

export const QuizList = (props) => {
  const renderQuizes = () => {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Тест {quiz}</NavLink>
        </li>
      );
    });
  };

  return (
    <div className={classes.QuizList}>
      <div>
        <h1>Список тестов</h1>

        <ul>{renderQuizes()}</ul>
      </div>
    </div>
  );
};
