import React, { Component } from 'react';
import fish from '../../assets/images/fish.png';

class Prices extends Component {

  state = {}
    

  render() {
    const priceResults = (
      <div>
        <img src={fish} alt="A fish" />
        <h2>Here is the Market Suggested Price for your catch: </h2>
        <p>$17.65 per pound</p>
      </div>
    )

    return (
      <div>
        {priceResults}
      </div>
    )
  }
}

export default Prices;