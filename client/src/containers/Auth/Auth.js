import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export class Auth extends Component {
  state = {
    formControls: {
      email: {},
      password: {},
    },
  };

  render() {
    const loginHandler = () => {};

    const registerHandler = () => {};

    const submitHandler = (event) => {
      event.preventDefault();
    };

    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form onSubmit={submitHandler} className={classes.AuthForm}>
            <Input label="Email" />

            <Input label="Пароль" errorMessage={"TEST"} />

            <Button type="success" onClick={loginHandler}>
              Войти
            </Button>
            <Button type="primary" onClick={registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
