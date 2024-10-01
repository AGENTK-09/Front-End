import "./App.css";
import { Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
