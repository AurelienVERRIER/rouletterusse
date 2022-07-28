import React from 'react'

class PlayerTurn extends React.Component {
  render() {
    return (
      <div className="playerTurnPage">
        <img
          className="opponentImage"
          src={this.props.opponent.image}
          alt="Player turn"
        />
      </div>
    )
  }
}

export default PlayerTurn
