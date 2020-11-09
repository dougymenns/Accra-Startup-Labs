import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about-us" render={() => <AboutUs />} />
          <Route exact path="/contact" render={() => <ContactUs />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
