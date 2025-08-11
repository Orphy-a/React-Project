import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";

function App() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
