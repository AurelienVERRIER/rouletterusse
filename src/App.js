import './App.css'
import React, { Component } from 'react'
import Rules from './components/Rules'
import Players from './components/Players'
import Homepage from './components/Homepage'
import GameOver from './components/GameOver'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      display: 'noRules',
      step: 'home',
      opponent: 'noOpponent',
    }
  }
  handleRulesClick = () => {
    this.setState({ display: 'rules' })
  }

  handleRulesClose = () => {
    this.setState({ display: 'noRules' })
  }

  handleStepChange = (step) => {
    this.setState({ step: step })
    // this.setState({opponent: "opponent"})
  }

  // handleBallsClick = () => {
  // }
  // handleVersusClick = () => {
  // }

  handleOpponentClick = (name) => {
    this.setState({ opponent: name, step: 'fight' })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Roulette Russe</h1>

          {this.state.step === 'home' && (
            <Homepage
              handlePlayClick={() => this.handleStepChange('opponent')}
            />
          )}
          {this.state.step === 'opponent' && (
            <Players
              handleStepChange={this.handleStepChange}
              handleOpponentClick={this.handleOpponentClick}
            />
          )}
          {this.state.step === 'fight' && <h1>Mechant</h1>}

          <div className="rules">
            <button className="" onClick={this.handleRulesClick}>
              Règles du jeu
            </button>

            <article>
              {this.state.display === 'noRules' ? (
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
    )
  }
}

export default App
