import React from 'react'
import bowser from '../img/bowser.jpg'
import barbenoire from '../img/barbenoire.jpg'
import bender from '../img/bender.png'
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
        { name: 'Kim Jun Un', image: kim },
        { name: 'Papa Noël', image: papanoel },
        { name: 'Vladimir Poutine', image: poutine },
        { name: "Ronald Mac Donald's", image: ronald },
        { name: 'Satan', image: satan },
        { name: 'Donald John Trump', image: trump },
      ],
    }
  }

  handleCharacterChosen = () => {
    ;<p1>Test</p1>
  }

  render() {
    return (
      <div className="opponentSelection">
        <div>
          <button onClick={() => this.props.handleStepChange('home')}>
            Retour
          </button>
        </div>

        <div className="row">
          {this.state.opponents.map((opponent) => (
            <div className="col-2">
              <img
                className="img-fluid mx-20"
                src={opponent.image}
                alt="Opponent picture"
                onClick={() => this.props.handleOpponentClick(opponent)}
              />

              <h2 className="text-center">{opponent.name}</h2>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-center">Choix de votre adversaire</h4>
          <p className="text-center">
            Choississez l'adversaire que vous souhaiez affronter. Ne vous
            trompez pas, un seul d'entre vous deux ressortira vainqueur!
          </p>
        </div>
      </div>
    )
  }
}

export default Players
