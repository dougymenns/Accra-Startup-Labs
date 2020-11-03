import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About"
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about-us" render={() => <About />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
