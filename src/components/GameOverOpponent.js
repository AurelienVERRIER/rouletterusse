import React from 'react'
import gameOverOpponent from './opponentGameOverBg.png'

class GameOverOpponent extends React.Component {
  render() {
    return (
      <div className="gameOverOpponent">
        <img
          className="GameOverImg position-absolute top-50 start-50 translate-middle"
          src={gameOverOpponent}
          alt="blood"
        />
      </div>
    )
  }
}

export default GameOverOpponent
