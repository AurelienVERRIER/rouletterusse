import React from 'react'
import bowser from '../img/bowser.jpg'
import barbenoire from '../img/barbenoire.webp'
import bender from '../img/bendergun.png'
import corona from '../img/corona.png'
import kim from '../img/kim.png'
import papanoel from '../img/papanoel.png'
import poutine from '../img/poutine.png'
import ronald from '../img/ronald.png'
import satan from '../img/satan.png'
import trump from '../img/trump.png'

class Players extends React.Component {
  constructor() {
    super()
    this.state = {
      opponents: [
        { name: 'Bowser', image: bowser },
        { name: 'Bender', image: bender },
        { name: 'Barbe Noire', image: barbenoire },
        { name: 'Corona Virus', image: corona },
        { name: 'Kim Jong Un', image: kim },
        { name: 'Papa Noël', image: papanoel },
        { name: 'Vladimir Poutine', image: poutine },
        { name: "Ronald Mac Donald's", image: ronald },
        { name: 'Satan', image: satan },
        { name: 'Donald John Trump', image: trump },
      ],
    }
  }

  render() {
    return (
      <div className="opponentSelection">
        <div className="opponentsMenu">
                   
          <h4 className="text-left choice-title">Choix de votre adversaire</h4>

          <p className="text-left choice-text">
            Choississez l'adversaire que vous souhaiez affronter. Ne vous
            trompez pas, un seul d'entre vous deux ressortira vainqueur!
          </p>

          <button onClick={() => this.props.handleStepChange('home')}>X</button>
        </div>

        <div className="row">
          {this.state.opponents.map((opponent) => (
            <div className="col-2 characterSelection">
              <img
                className="img-fluid mx-20 opponentsPicture"
                src={opponent.image}
                alt="Opponent picture"
                onClick={() => this.props.handleOpponentClick(opponent)}
              />

              <h2 className="text-center opponentsName">{opponent.name}</h2>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Players
