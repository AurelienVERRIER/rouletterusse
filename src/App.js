import "./App.css";
import React, { Component } from "react";
import Rules from "./components/Rules";
import Players from "./components/Players";
import Homepage from "./components/Homepage";
import Random from "./components/Random";
import GameOver from "./components/GameOver";

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: "noRules",
      play: false,
      opponent: false,
    };
  }
  handleRulesClick = () => {
    this.setState({ display: "rules" });
  };

  handleRulesClose = () => {
    this.setState({ display: "noRules" });
  };

  handlePlayClick = () => {
    this.setState({ play: true });
  };

  handleOpponentClick = () => {
    this.setState({ opponent: true });
  };

  render() {
    return (
      <div>
        <h1>Roulette Russe</h1>
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

        {this.state.play ? (
          <article>
            <Players />
          </article>
        ) : (
          <p></p>
        )}

        <Random />
      </div>
    );
  }
}

export default App;
