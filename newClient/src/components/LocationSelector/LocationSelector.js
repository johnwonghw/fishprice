import React, { Component } from 'react';
import fadedHelm from '../../assets/images/helm.png';

class SpeciesSelector extends Component {

  render() {

      const locations = this.props.locations.map((location, index) => {
        return (
          <option key={index} value={locations}>{location}</option>
        )
      })

    return (
      <form onSubmit={this.props.onSubmitLocation}>
        <div className="container onboard">
          <div className="button-navigation">
            <div onClick={this.props.onReturnToSpecies}><i className="fas fa-chevron-left"></i></div>
            <input type="submit" value="NEXT"></input>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
              <div className="form-group">                
                <h2>Where are you <br/> fishing today?</h2>
                <label for="location-select">e.g. British Columbia</label>
                <div className="select-wrapper">
                  <i className="fas fa-chevron-down"></i>
                  <select id="location-select" onChange={this.props.onChangeLocation} className="form-control">
                    <option disabled selected value> Select </option>
                    {locations}
                  </select>
                </div>
              </div>
            </div>
            <img src={fadedHelm} alt="A fish icon" className="faded-icon" />
          </div>
        </div>
      </form>
    )
  }
}

export default SpeciesSelector;