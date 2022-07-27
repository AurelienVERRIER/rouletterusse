import './App.css';
import React, { Component } from 'react';
import Rules from "./components/Rules";
import Players from "./components/Players";
import Homepage from "./components/Homepage";
import GameOver from "./components/GameOver";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      display: "noRules",
      play: "noPlay",
      opponent: "noOpponent",
    }
  }
  handleRulesClick = () => {
    this.setState({display: "rules"})
  }
  handleRulesClose = () => {
    this.setState({ display: "noRules" })
  }
 
  handlePlayClick = () => {
    this.setState({play: "play"})
    // this.setState({opponent: "opponent"})
  }
  handleHomePage = () => {
    this.setState({play: "noPlay"})
  }

  // handleBallsClick = () => {
  // }
  // handleVersusClick = () => {
  // }

  handleOpponentClick = () => {
    this.setState({opponent: "opponent"})
  }

  

  render() {
  return (

    <div>

      <div>
        <h1>Roulette Russe</h1>



        <article>
        {this.state.play === "noPlay" ? (
        <>
          <article>
            <Homepage
              handlePlayClick={() => this.handlePlayClick()} />
              {/* handleBallsClick={() => this.handleBallsClick()}
              handleVersusClick={() => this.handleVersusClick()} */}
              {/* /> */}
          </article>
        </>
        ) : (
        
        <Players/>

        // <>
        //   <article>
        //     <Players 
        //     handleHomePage={() => this.handleHomePage()}
        //     handleOpponentClick={() => this.handleOpponentClick()}
        //     />
        //   </article>
        // </>
        )}
      </article>



        {/* <Homepage /> */}


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
      
{/* 
      <article>
        {this.state.play === "Play" ? (
        <>
          <article>
            <Homepage handlePlayClick={() => this.handlePlayClick()} />
          </article>
        </>
        ) : (
        <>
          <p>Test un deux</p>
        </>
        )}
      </article> */}

    </div>
  );
}

};
  

export default App;
