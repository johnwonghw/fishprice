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
      <div className="container onboard">
        <div className="button-navigation">
          <div onClick={this.props.onReturnHome}><i className="fas fa-chevron-left"></i></div>
          <input type="submit" value="NEXT"></input>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
            <div className="form-group">
              <h2>What are you fishing for today?</h2>
                <select onChange={this.props.onChangeSpecies} className="form-control">
                  {species}
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