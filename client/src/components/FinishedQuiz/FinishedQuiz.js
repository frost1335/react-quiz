import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          How are you ?<i className={"fad fa-times " + classes.error}></i>
        </li>

        <li>
          <strong>2. </strong>
          How are you ?<i className={"fad fa-check " + classes.success}></i>
        </li>
      </ul>

      <p>Правильно 4 из 10</p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
