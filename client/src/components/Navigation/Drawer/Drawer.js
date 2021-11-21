import React, { Component } from "react";
import classes from "./Drawer.module.css";
import BackDrop from "../../UI/BackDrop/BackDrop";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Список" },
  { to: "/auth", label: "Авторизация" },
  { to: "/quiz-creator", label: "Создать тест" },
];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} onClick={this.clickHandler}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  clickHandler = () => {
    this.props.onClose();
  };

  render() {
    const cls = [classes.Drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <BackDrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}

export default Drawer;
