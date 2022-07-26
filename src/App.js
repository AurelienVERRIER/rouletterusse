import "./App.css";
import React, { Component } from "react";
import Rules from "./components/Rules";
import GameOver from "./components/GameOver";

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
  handleRulesClose = () => {
    this.setState({ display: "noRules" });
  };

  render() {
    return (
      <div>
        <h1 className="title">Roulette Russe</h1>
        <Homepage />
        <div className="rules">
          <button className="" onClick={this.handleRulesClick}>
            Règles du jeu
          </button>
          <article>
            {this.state.display === "noRules" ? (
              <h2></h2>
            ) : (
              <Rules handleRulesClose={() => this.handleRulesClose()} />
            )}
          </article>
        </div>
      </div>
    );
  }
}
export default App;
