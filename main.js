import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/About";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>welcome to swiggy</div>,
    errorElement: <Error />
  },
  {
    path: "/restaurants",
    element: <AppLayout />,
  },
  {
    path: '/about',
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
