import React, { Component } from 'react';
import SpeciesSelector from '../../components/SpeciesSelector/SpeciesSelector';
import LocationSelector from '../../components/LocationSelector/LocationSelector';
import logo from '../../assets/images/fish.png';

class Onboard extends Component {

  state = {
    choosingSpecies: false,
    choosingLocation:false,
    started: false,
    priceCreated: false,
    species: [
      'Koho Salmon',
      'Lobster',
      'Tiger Shrimp',
      'Pink Salmon'
    ],
    selectedSpecies: 'Koho Salmnon',
    locations: [
      'British Columbia', 
      'Prince Edward Island', 
      'Nova Scotia',
      'New Brunswick',
      'Quebec'
    ],
    selectedLocation: 'British Columbia'
  }

  startOnboard = () => { 
    this.setState({
      choosingSpecies: true,
      started: true
    });
  }

  onSubmitSpecies = (event) => {
    this.setState({
        choosingSpecies: false,
        choosingLocation: true
      })
    event.preventDefault();
  }

  onChangeSpecies = (event) => {
    console.log('this is the species ' + event.target.value)
    this.setState({
      selectedSpecies: event.target.value
    });
  }

  
  onChangeLocation = (event) => {
    console.log('this is the location ' + event.target.value)
    this.setState({
      selectedLocation: event.target.value
    });
  }
  
  onSubmitLocation = (event) => {
    this.setState({
      choosingLocation: false,
    });
    const nextPriceCreated = !this.state.priceCreated
    this.setState(prevState => ({
        priceCreated:nextPriceCreated
      }));
    event.preventDefault();
    this.props.setFinalLocation(this.state.selectedLocation);
    this.props.showPrices(nextPriceCreated);
  } 

  onReturnHome = () => {
    this.setState({
      choosingSpecies: false,
      choosingLocation: false,
      started: false,
      finished: false
    })
  }

  onReturnToSpecies = () => {
    this.setState({
      choosingLocation: false,
      choosingSpecies: true,
      finished: false,
      started: true
    })
  }

  render() {
    const welcomeMessage = (
      <div className="container onboard">
        <div className="row">
          <div className="col-xs-12 welcome-message">
            <img src={logo} alt="Site logo" className="img img-responsive logo" />
            <h1 className="welcome">Welcome to FishPrice.</h1>
            <h2 className="tagline">We help you swim through crowd sourcing.</h2>
            <button onClick={this.startOnboard} className="fish-button">Get Started</button>
          </div>
        </div>
      </div>
    )

    return (
      <div>

        {(!this.state.choosingSpecies && !this.state.started) ? welcomeMessage : null }
        
        {this.state.choosingSpecies ? <SpeciesSelector 
          species={this.state.species}
          onSubmitSpecies={this.onSubmitSpecies}
          onChangeSpecies={this.onChangeSpecies}
          onReturnHome={this.onReturnHome}
          /> : null}

        {this.state.choosingLocation ? <LocationSelector 
          locations={this.state.locations} 
          onSubmitLocation={this.onSubmitLocation}
          onChangeLocation={this.onChangeLocation}
          onReturnToSpecies={this.onReturnToSpecies}
          /> : null }
        
      </div>
    )
  }
}

export default Onboard;