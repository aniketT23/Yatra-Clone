import { SignIn } from "./components/SignIn";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <SignIn />
      </div>
    </BrowserRouter>
  );
}
