import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.module.css";
import { Loader } from "../../components/UI/Loader/Loader";
import { connect } from 'react-redux'
import { fetchQuizes } from "../../store/actions/quiz";

class QuizList extends React.Component {

  componentDidMount() {
    this.props.fetchQuizes()
  }

  render() {
    const renderQuizes = () => {
      return this.props.quizes.map((quiz, index) => {
        return (
          <li key={quiz.id}>
            <NavLink param={quiz} to={"/quiz/" + quiz.id}>
              {quiz.name}
            </NavLink>
          </li>
        );
      });
    };

    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>

          {this.props.loading && this.props.quizes.length !== 0 ? <Loader /> : <ul>{renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)