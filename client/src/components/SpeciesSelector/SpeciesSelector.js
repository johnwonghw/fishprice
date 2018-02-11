import React, { Component } from 'react';
import fadedFish from '../../assets/images/fish-faded.png';

class SpeciesSelector extends Component {
  
  render() {
    
    const species = this.props.species.map((species, index) => {
      return (
        <option key={index} value={species}>{species}</option>
      )
    })

    return (
      <form onSubmit={this.props.onSubmitSpecies}>
      <div className="container onboard">
        <div className="button-navigation">
          <div onClick={this.props.onReturnHome}><i className="fa fa-chevron-left"></i></div>
          <input type="submit" value="NEXT"></input>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
            <div className="form-group">
              <h2>What are you <br /> fishing for today?</h2>
                <label htmlFor="species-select">e.g. lobster</label>
                <div className="select-wrapper">
                  <i className="fas fa-chevron-down"></i>
                  <select id="species-select" onChange={this.props.onChangeSpecies} className="form-control">
                    <option disabled selected value> Select </option>
                    {species}
                  </select>
                </div>
              </div>
          </div>
          <img src={fadedFish} alt="A fish icon" className="faded-icon"/>
        </div>
      </div>
      </form>
    )
  }
}

export default SpeciesSelector;