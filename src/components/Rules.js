import React from "react";

class Rules extends React.Component {
  render() {
    return (
      <div className="gameRules  mx-5 p-5 rounded-pill p-3 mb-2 bg-secondary text-white d-flex flex-column">
        <button
          type="button"
          className="btn-close text-end"
          aria-label="Close"
          onClick={this.props.handleRulesClose}
        ></button>
        <h2 className="text-center ">Règles du jeu</h2>
        <p className="text-center fs-4 p-5">
          La roulette russe est un jeu de hasard potentiellement mortel
          consistant à mettre une balle dans le barillet d'un révolver, à
          tourner ce dernier de manière aléatoire (assez vite pour qu'on ne
          puisse pas suivre l'emplacement de la chambre chargée), puis à pointer
          le revolver sur sa tempe avant d'actionner la détente.
        </p>
      </div>
    );
  }
}

export default Rules;
