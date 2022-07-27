import React from "react";

class Homepage extends React.Component {
  constructor() {
    super();
 
    this.state = {
      play: false,
    }
  }
  
  handlePlayClick = () => {
    this.setState({play: true})
  }

  render() {
    return (
      <>
        <div>
          <ul className="choices">
            {/* <button>Jouer</button> */}

            <button onClick={this.props.handlePlayClick} >Jouer</button>
            
            {/* <button onClick={this.props.handleBallsClick} >Balles</button>
            <button onClick={this.props.handleVersusClick} >Nombre de joueurs</button> */}
          </ul>
        </div>
      </>
    );
  }
}

export default Homepage;
