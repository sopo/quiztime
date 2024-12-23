import { Navigate, useParams } from "react-router-dom";
import QuizComponent from "./quiz";
import React from "react";

const Question: React.FC = () => {
  const { id } = useParams();

  function nextQuestion() {
    if (id === "5") {
      <Navigate to="/result" />;
      return;
    }
    const nextId = parseInt(id as string) + 1;
    <Navigate to={"/" + nextId} />;
  }

  return (
    <h1>
      <QuizComponent />
    </h1>
  );
};
export default Question;
