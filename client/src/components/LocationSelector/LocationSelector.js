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
        <h2>Where are you fishing today?</h2>
        <select onChange={this.props.onChangeLocation}>
          {locations}
        </select>
        <input type="submit" value="next"></input>
      </form>
    )
  }
}

export default SpeciesSelector;