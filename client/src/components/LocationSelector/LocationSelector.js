import React, { Component } from 'react';

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
            <button onClick={this.props.onReturnToSpecies}>Go Back</button>
            <input type="submit" value="next"></input>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
              <div className="form-group">
                
                  <h2>Where are you fishing today?</h2>
                  <select onChange={this.props.onChangeLocation} className="form-control">
                    {locations}
                  </select>
                  
                
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default SpeciesSelector;