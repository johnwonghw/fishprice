import React from 'react';
import Component from '../Component';

class ReportPrice extends Component {
  componentDidMount() {
    var jQuery = window['jQuery'];
  }

  state = {
    postSubmitted: false,
  }

  render() {
    var jQuery = window['jQuery'];

    var locations = this.getData("locationsList");
    if (locations == null) {
      locations = this.retrieveData("locationsList")
    }
    var species = this.getData("speciesList");
    if (species == null) {
      species = this.retrieveData("speciesList")
    }

    return (
      <div className="container">
        <div classname="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 report-price">
            <h2>Tell us about your recent sale.</h2>
            <div className="form-group">
              <h4>What fish did you sell?</h4>
              <label>e.g. Coho</label>
              <div className="select-wrapper">
                <i className="fas fa-chevron-down"></i>
                <select id="species-select" defaultValue="0" onChange={this.props.onSpeciesChanged} className="form-control">
                  <option disabled value="0"> Select </option>
                  {
                    species.map((currentSpecies, index) => {
                      return (
                        <option key={index} value={currentSpecies}>{currentSpecies}</option>
                      )
                    })
                  }
                </select>
              <div>
            </div>
      </div>
      </div>
            <div className="form-group">
              <h4>Where did you fish?</h4>
              <label>e.g. Bristol Bay</label>
              <div className="select-wrapper">
                <i className="fas fa-chevron-down"></i>
                <select id="location-select" defaultValue="0" onChange={this.props.onLocationChanged} className="form-control">
                  <option disabled value="0"> Select </option>
                  {locations.map((location, index) => {
                    return (
                      <option key={index} value={location}>{location}</option>
                    )
                  })}
                </select>
              </div>
            </div>


            <form>
              <div className="form-group">
                <h4>Your Name</h4>
                <input type="text" className="form-control" name="name" placeholder="name" onChange={this.props.textChange} />
              </div>

              <div className="form-group">
                <h4>Your Contact</h4>
                <input type="text" className="form-control" name="phone" placeholder="phone" onChange={this.props.textChange} />
              </div>

              <div className="form-group">
                <h4>Comments</h4>
                <textarea type="text" className="form-control" name="comment" placeholder="comments" onChange={this.props.textChange} />
              </div>

              <div className="form-group">
                <h4>Sell Price</h4>
                <div style={{"display": "flex"}}>
                  <input type="number" className="form-control" style={{"width": "50%"}} name="soldPrice" placeholder="price" onChange={this.props.textChange} />
                  <span><h4> /lb</h4></span>
                </div>
              </div>

              <div className="form-group">
                <h4>Who is your buyer?</h4>
                <input type="text" className="form-control" name="buyerName" placeholder="buyer" onChange={this.props.textChange} />
              </div>

              <button className="fish-button" onClick={this.props.submitForumPost}>Submit!</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ReportPrice;
