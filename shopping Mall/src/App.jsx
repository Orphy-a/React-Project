import { RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { router } from "./routers/routers";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
