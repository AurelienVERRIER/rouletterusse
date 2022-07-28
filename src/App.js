import './App.css'
import React, { Component } from 'react'
import Rules from './components/Rules'
import Players from './components/Players'
import Homepage from './components/Homepage'
import GameOver from './components/GameOver'
import Fight from './components/Fight'

class App extends React.Component {
  constructor() {
    super()

    const max = 6
    const min = 1

    this.state = {
      display: 'noRules',
      step: 'home',
      opponent: 'noOpponent',
      randomBullet: Math.floor(Math.random() * max) - min,
      number: 1,
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
  }

  handleOpponentClick = (opponent) => {
    this.setState({ opponent: opponent, step: 'fight' })
  }

  handleShootClick = () => {
    if (this.state.randomBullet !== this.state.number) {
      this.state.randomBullet += 1
      if (this.state.randomBullet === 6) {
        this.state.randomBullet = 1
      }
      console.log(this.state.randomBullet, this.state.number)
    } else {
      console.log("t'es mort")
      this.setState({ step: 'gameOver' })
    }
  }

  render() {
    return (
      <div>
        {this.state.step === 'home' && (
          <article className="homePage">
            <h1>Roulette Russe</h1>
            <Homepage
              handlePlayClick={() => this.handleStepChange('opponent')}
            />
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
          </article>
        )}

        {this.state.step === 'opponent' && (
          <Players
            handleStepChange={this.handleStepChange}
            handleOpponentClick={this.handleOpponentClick}
          />
        )}
        {this.state.step === 'fight' && (
          <div>
             <button
              className="shoot"
              onClick={() => this.handleShootClick(this.state.randomBullet)}>
              Tirez !
            </button>
            <Fight opponent={this.state.opponent} />
           
          </div>
        )}
        {this.state.step === 'gameOver' && (
          <div>
            <GameOver />
          </div>
        )}
      </div>
    )
  }
}

export default App
