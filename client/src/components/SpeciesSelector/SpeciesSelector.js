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
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
            <form onSubmit={this.props.onSubmitSpecies}>
              <div className="form-group">
                <h2>What are you fishing for today?</h2>
                  <select onChange={this.props.onChangeSpecies} className="form-control">
                    {species}
                  </select>
                  <div className="button-navigation">
                    <button className="btn btn-default" onClick={this.props.onReturnHome}>Go Back</button>
                    <input type="submit" value="Next" className="form-control btn btn-success"></input>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SpeciesSelector;