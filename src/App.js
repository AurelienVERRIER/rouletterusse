import "./App.css";
import React, { Component } from "react";
import Rules from "./components/Rules";

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: "noRules",
    };
  }
  handleRulesClick = () => {
    this.setState({ display: "rules" });
  };

  render() {
    return (
      <div>
        <h1 className="title">Roulette Russe</h1>
        <button
          className="text-decoration-none text-black-50"
          onClick={this.handleRulesClick}
        >
          Règles du jeu
        </button>
        <article>
          {this.state.display === "noRules" ? <h2></h2> : <Rules />}
        </article>
      </div>
    );
  }
}
export default App;
