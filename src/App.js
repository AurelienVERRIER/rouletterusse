import './App.css'
import React, { Component } from 'react'
import Rules from './components/Rules'
import Players from './components/Players'
import Homepage from './components/Homepage'
import GameOver from './components/GameOver'
import Shoot from './components/Shoot'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      display: 'noRules',
      play: 'noPlay',
      opponent: 'noOpponent',
      shoot:{},
      deadOrAlive: 'alive',
    }
  }
  handleRulesClick = () => {
    this.setState({ display: 'rules' })
  }
  handleRulesClose = () => {
    this.setState({ display: 'noRules' })
  }
  handlePlayClick = () => {
    this.setState({ play: 'play' })
  }
  handleHomePage = () => {
    this.setState({ play: 'noPlay' })
  }
  handleOpponentClick = () => {
    this.setState({ opponent: 'opponent' })
    console.log(test)
  }


  // getRandomInt = (max) => {
  //   Math.floor(Math.random()* max);
  // }

  getRandomInt = () => {
    Math.floor(Math.random()*6);
  }

  triggerOn = () => {
    this.setState({ shoot: this.getRandomInt(6) })
  
    console.log(this.state.shoot)
    // this.setState({deadOrAlive: 'Test'})
  }


  // handleTestMousseDown = () => {
  //   this.setState({
      
  //   })
  // }

  render() {
    return (
      <div>
        <div>
          <h1>Roulette Russe</h1>
          
          <section className='shoot'>
                <button onClick={this.triggerOn}>TIRE!</button>
                {/* <h2>{this.state.shoot}</h2> */}
          </section>
      
          <article>
            {this.state.play === 'noPlay' ? (
              <section>
                <Homepage 
                  handlePlayClick={() => this.handlePlayClick()}
                />
               </section>
            ) : (
              <section>
                
                {this.state.opponent === 'noOponnent' ? (
                  
                  <h1>TEST!</h1>
                  
                  // <Players
                  //   handleHomePage={() => this.handleHomePage()}
                  //   handleOpponentClick={() => this.handleOpponentClick()}
                  // />
                ) : (

                // <h1>TEST!</h1>
                  <Players
                    handleHomePage={() => this.handleHomePage()}
                    handleOpponentClick={() => this.handleOpponentClick()}
                  />
                )}
                
              </section>
            )}
          </article>


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
      </div>
    )
  }
}

export default App
