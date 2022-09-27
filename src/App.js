import "./App.css";
import Header from "./components/Header";
import "./styles/index.css";
import { Router } from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
