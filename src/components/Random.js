import React from "react";

class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      playerTurn: true,
      randomBullet: 0,
      playerBullet: 0,
    };
  }

  randomNumber = () => {
    const min = 0;
    const max = 6;

    let randomPlayerBullet = Math.floor(Math.random() * max) - min;
    let randomBulletCheck = Math.floor(Math.random() * max) - min;

    if (randomBulletCheck === randomPlayerBullet) {
      console.log("T'es mort");
    }
    console.log(randomBulletCheck, randomPlayerBullet);
  };

  render() {
    return (
      <div>
        <button onClick={this.randomNumber}>Tirer !</button>
      </div>
    );
  }
}

export default Random;
