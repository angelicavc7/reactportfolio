import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Work from "./pages/Work/Work"
import Wrapper from "./Components/Wrapper/Wrapper";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./pages/ContactMe/ContactMe";
import Resume from "./pages/Resume/Resume";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
      </div>
    </Router>
  );
}
export default App;
