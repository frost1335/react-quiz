import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { QuizList } from "./containers/QuizList/QuizList";
import { Auth } from "./containers/Auth/Auth";
import { QuizCreator } from "./containers/QuizCreator/QuizCreator";

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/auth/:id" element={<Auth />} />
          <Route path="/quiz-creator" element={<QuizCreator />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/" element={<QuizList />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
