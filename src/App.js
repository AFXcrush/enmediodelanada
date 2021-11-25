import { Route, Switch, withRouter } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Proyecto from "./pages/Proyecto";
import Veronline from "./pages/Veronline";
import Secretos from "./pages/Secretos";
import Blog from "./pages/Blog";
import LaNada from "./pages/LaNada";
import LosSucesos from "./pages/LosSucesos";
import MasSecretos from "./pages/MasSecretos";
import Comic from "./pages/Comic";
import Mapa from "./pages/Mapa";

import "./scss/app.scss";

const pagsSinHeader = ["/la-nada", "/los-sucesos", "/mas-secretos", "/comic"];

function App({ location }) {
  return (
    <div className="App">
      {pagsSinHeader.indexOf(location.pathname) < 0 && <Header />}
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

        <Route path="/mapa-del-sitio">
          <Mapa />
        </Route>

        <Route path="/secretos">
          <Secretos />
        </Route>

        <Route path="/la-nada">
          <LaNada />
        </Route>

        <Route path="/los-sucesos">
          <LosSucesos />
        </Route>

        <Route path="/mas-secretos">
          <MasSecretos />
        </Route>

        <Route path="/comic">
          <Comic />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
