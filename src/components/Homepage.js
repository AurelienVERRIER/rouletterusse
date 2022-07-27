import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <ul className="choices">
          <button
            type="button"
            className="btn-close text-end"
            aria-label="Close"
            onClick={this.props.handleRulesClose}
            >Jouer
          </button>
          <button>Balles</button>
          <button>Joueurs</button>
        </ul>
      </div>
    );
  }
}

export default Homepage;
