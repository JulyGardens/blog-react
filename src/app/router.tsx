import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { RootPage } from "../pages/Root";
import { SinglePostPage } from "../pages/SinglePost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:id",
    element: <SinglePostPage />,
    errorElement: <ErrorPage />,
  },
]);
