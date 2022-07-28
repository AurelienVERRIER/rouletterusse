import React from 'react';
import barbenoire from '../img/barbenoire.jpg';
import bowser from '../img/bowser.jpg';
import bender from '../img/bender.jpg';
import corona from '../img/corona.jpg';
import kim from '../img/kim.jpg';
import papanoel from '../img/papanoel.png';
import poutine from '../img/poutine.jpg';
import ronald from '../img/ronald.png';
import satan from '../img/satan.jpg';
import trump from '../img/trump.jpg';

class Players extends React.Component {
  constructor () {
    super()
    this.state = {
      opponents: [
        {name: "Bowser", image:bowser},
        {name: "Bender", image:bender},
        {name: "Barbe Noire", image:barbenoire},
        {name: "Corona Virus", image:corona},
        {name: "Kim Jon Un", image:kim},
        {name: "Papa Noël", image:papanoel},
        {name: "Vladimir Poutine", image:poutine},
        {name: "Ronald Mac Donald's", image:ronald},
        {name: "Satan", image:satan},
        {name: "Donald John Trump", image:trump}
      ]
    }
  }

    onPickOpponents(opponents) {
      this.setState({opponents})
    }

    getRandom6 = () => {
      Math.floor(Math.random()*6);
    }

  // handleCharacterChosen = (e) => {
  //   e.preventDefault();
  //   console.log("Bowser ?")
  // }

	render() {
		return(
      <div className='opponentSelection'>
      
        <div>
          <h4 className='text-center'>Choix de votre adversaire</h4> 
          <p className='text-center'>Choississez l'adversaire que vous souhaiez affronter. Ne vous trompez pas, un seul d'entre vous deux ressortira vainqueur!</p>
        </div> 
        
        <div>
          <button onClick={this.props.handleHomePage}>Retour</button>
        </div> 

    

        {/* <div>
          <button onClick={this.props.handleOponnentClick}>BOUTTON TEST</button>
        </div>  */}

        <div className='row'>
            {this.state.opponents.map((opponent) => (
              <a href='' onClick={this.handleCharacterChosen} key={opponent.name} className='col-2'>
                <img className='img-fluid mx-20' src={opponent.image} alt="Opponent picture" onClick={this.props.handleOponnentClick}/>
                <h2 className='text-center'>{opponent.name}</h2>            
              </a>
            ))}
          </div>    
      </div>
		)
	}
}

export default Players


        {/* <div className='row'>
           {this.state.opponents.map((opponent) => (
              <a href='' onClick={this.handleCharacterChosen} className='col-2'>
                <img className='img-fluid mx-20' src={opponent.image} alt="Opponent picture" onClick={this.props.handleOponnentClick}/>
                <h2 className='text-center'>{opponent.name}</h2>            
              </a>
            ))}
        </div> */}