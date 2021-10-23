import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Proyecto from "./pages/Proyecto";
import Veronline from "./pages/Veronline";
import Secretos from "./pages/Secretos";
import Blog from "./pages/Blog";

import "./scss/app.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>

          <Route path="/proyecto">
            <Proyecto />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/veronline">
            <Veronline />
          </Route>

          <Route path="/secretos">
            <Secretos />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
