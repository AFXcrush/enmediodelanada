import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./scss/app.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Inicio />
        <Footer />
      </div>
    </Router>
  );
}

export default App;