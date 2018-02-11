import React, { Component } from 'react';

class SpeciesSelector extends Component {
  
  render() {
    
    const species = this.props.species.map((species, index) => {
      return (
        <option key={index} value={species}>{species}</option>
      )
    })

    return (
      <div className="container onboard">
        <div className="button-navigation">
          <div onClick={this.props.onReturnHome}><i class="fas fa-chevron-left"></i></div>
          <input type="submit" value="Next"></input>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
            <form onSubmit={this.props.onSubmitSpecies}>
              <div className="form-group">
                <h2>What are you fishing for today?</h2>
                  <select onChange={this.props.onChangeSpecies} className="form-control">
                    {species}
                  </select>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SpeciesSelector;