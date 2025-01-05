import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import App from "../App";
import ProjectDetails from "../pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "/test",
    element: <>Test</>,
  },
]);
