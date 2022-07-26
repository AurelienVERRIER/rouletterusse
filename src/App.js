import './App.css';
import React, { Component } from 'react';
import Rules from "./components/Rules";
import Players from "./components/Players";


class App extends Component {
  constructor() {
    super()
  
    this.state = {
      display: "noRules",
      play: false,
      opponent: false,
    }
  }
  handleRulesClick = () => {
    this.setState({display: "rules"})
  }

  handlePlayClick = () => {
    this.setState({play: true})
  }
  
  handleOpponentClick = () => {
    this.setState({opponent: true})
  }

  render() {
  return (

    <div>
      
      <h1 className='title'>Roulette Russe</h1>
      <button className="text-decoration-none text-black-50" onClick={this.handlePlayClick}>Jouer</button>
      <button className="text-decoration-none text-black-50" onClick={this.handleRulesClick}>Règles du jeu</button>
      

      {this.state.play ?
      <article>
        <Players
        />
      </article>
      :
        <p></p>
      }


 
      {this.state.display === "noRules" ?
      <article>
        <p>Cliquez sur "Jouer" pour lancer une partie</p>
        <p>Cliquez sur "Règles du jeu" pour avoir le détail des règles</p>
      </article>
      :
        <Rules/>
      }

    </div>
  );
}

}
export default App;
