import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="w-full 2xl:w-[1480px] mx-auto">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
