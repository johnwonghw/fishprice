import React, { Component } from 'react';

class SpeciesSelector extends Component {

  render() {

      const locations = this.props.locations.map((location, index) => {
        return (
          <option key={index} value={locations}>{location}</option>
        )
      })

    return (
      <div className="container onboard">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
            <div className="form-group">
              <form onSubmit={this.props.onSubmitLocation}>
                <h2>Where are you fishing today?</h2>
                <select onChange={this.props.onChangeLocation} className="form-control">
                  {locations}
                </select>
                <div className="button-navigation">
                  <button className="btn btn-default" onClick={this.props.onReturnToSpecies}>Go Back</button>
                  <input type="submit" value="next" className="form-control btn btn-success"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpeciesSelector;