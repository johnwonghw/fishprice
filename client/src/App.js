import React, { Component } from 'react';
import './App.css';
import Onboard from './containers/Onboard/Onboard';

class App extends Component {

  state = {
    onboard: true,
    prices: false,
    speciesName: '',
    locationName: ''
  }

  setFinalSpecies = (species) => {
    this.setState({
      speciesName: species
    });
  }

  setFinalLocation = (location) => {
    console.log(location);
    this.setState({
      locationName: location
    });
  }

  render() {
    return (
      <div className="App">

        { this.state.onboard ? <Onboard 
          setFinalSpecies={this.setFinalSpecies}
          setFinalLocation={this.setFinalLocation}
        /> : null }
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;