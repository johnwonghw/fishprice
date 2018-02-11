import React, { Component } from 'react';

class SpeciesSelector extends Component {
  
  render() {
    
    const species = this.props.species.map((species, index) => {
      return (
        <option key={index} value={species}>{species}</option>
      )
    })

    return (
      <form onSubmit={this.props.onSubmitSpecies}>
        <h2>What are you fishing today?</h2>
        <select onChange={this.props.onChangeSpecies}>
          {species}
        </select>
        <input type="submit" value="next"></input>
      </form>
    )
  }
}

export default SpeciesSelector;