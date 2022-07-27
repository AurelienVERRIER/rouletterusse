import React from 'react'

class Fight extends React.Component {
  render() {
    return (
      <div className="fightPage">
        <img
          className="opponentImage"
          src={this.props.opponent.image}
          alt="Opponent face"
        />
      </div>
    )
  }
}

export default Fight
