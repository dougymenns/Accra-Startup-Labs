import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs"
import ContentNav from "./Components/Partners";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about-us" render={() => <AboutUs />} />
          <Route exact path="/yes" render={() => <ContentNav />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
