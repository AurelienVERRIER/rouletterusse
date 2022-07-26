import React from 'react'
import blood from './blood.png'

class GameOver extends React.Component {
	render() {
		return(
            <div className="gameOver">
               <img 
                className="GameOverImg position-absolute top-50 start-50 translate-middle" 
                src={blood}
                alt="blood"
               />
               <h2 className='dead fs-1 text-center position-absolute top-50 start-50 translate-middle text-white'>T'ES MORT</h2>
            </div>
		)
	}
}

export default GameOver