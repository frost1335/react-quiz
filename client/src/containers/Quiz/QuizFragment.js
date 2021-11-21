import React from "react";
import Quiz from "./Quiz";
import { useParams } from "react-router";

const QuizFragment = (props) => {
  const params = useParams();
  return <Quiz params={params} />;
};

export default QuizFragment;
