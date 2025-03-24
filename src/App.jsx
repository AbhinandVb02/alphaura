import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Index } from "./modules/home/Index";
import { Navbar } from "./modules/navigation/Navbar";
import { AppRoute } from "./modules/routes/Approute";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
