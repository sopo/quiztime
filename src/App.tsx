
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Question from "./pages/question";
import Result from "./pages/result";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="question/1" />,
  },
  {
    path: "question/:id",
    element: <Question />,
  },
  {
    path: "result",
    element: <Result />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
