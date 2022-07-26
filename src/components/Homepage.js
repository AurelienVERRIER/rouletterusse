import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <ul className="choice">
          <button className="play">Jouer</button>
          <button> Balles </button>
          <button>Joueurs</button>
        </ul>
      </div>
    );
  }
}

export default Homepage;
