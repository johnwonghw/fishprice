import React, { Component } from 'react';
import './App.css';
import Onboard from './containers/Onboard/Onboard';
import Prices from './containers/Prices/Prices';
class App extends Component {

  state = {
    onboard: true,
    prices: false,
    explanation: false,
    speciesName: '',
    locationName: ''
  }

  setFinalSpecies = (species) => {
    this.setState({
      speciesName: species
    });
  }

  setFinalLocation = (location) => {
    this.setState({
      locationName: location
    });
  }

  showPrices = (resultsCreated) => {
    console.log("test " + resultsCreated)
    this.setState({
      prices: resultsCreated,
      onboard: !resultsCreated,
      explanation: !resultsCreated
    });
  }

  showExplanation = (displayExplanation) => {
    this.setState({
      // prices: !displayExplanation,
      // onboard: !displayExplanation,
      explanation: displayExplanation,
    })
  }





  render() {
    console.log(this.state)
    return (
      <div className="App">

        { this.state.onboard ? <Onboard 
          setFinalSpecies={this.setFinalSpecies}
          setFinalLocation={this.setFinalLocation}
          showPrices={this.showPrices}
        /> : null }
        
        {this.state.prices ? <Prices showExplanation={this.showExplanation} /> : null }

        <footer>
        </footer>
      </div>
    );
  }
}

export default App;