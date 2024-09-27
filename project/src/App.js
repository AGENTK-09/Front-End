// import "./App.css";
import { Outlet } from "react-router-dom";
import ViewScore from "./Pages/ViewScore";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <ViewScore />
    </>
  );
}

export default App;
