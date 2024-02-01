import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home, { loader as HomeLoader } from "./pages/Home";
import SingleMovie, { loader as SingleMovieLoader } from "./pages/SingleMovie";
import Error from "./components/Error";
import Register from "./pages/Register";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import Login from "./pages/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: HomeLoader,
      errorElement: <Error />,
    },
    {
      path: "/show/:id",
      element: <SingleMovie />,
      loader: SingleMovieLoader,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      action: registerAction,
    },
    {
      path: "/login",
      element: <Login />,
      action: loginAction,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
