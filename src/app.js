import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact activeClassName="current" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/about">About</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="current" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

const Home = () => (
  <div className="home">
    <h1>Welcome to my this first attempt at routing in Reactjs</h1>
    <p>Hope we survive the experience.</p>
  </div>
);

const About = () => (
  <div className="about">
    <h1>About Me</h1>
    <p>
      My full name is Ana Carolina Medeiros Labeca, but you can call me Ana, I
      am a front end developer with around 2 years of experience.
    </p>
  </div>
);

const Contact = () => (
  <div className="contact">
    <h1>Contact Me</h1>
    <p>
      You can reach me via e-mail: <strong>ana@email.com</strong>
    </p>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hola</h1>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
