import React from 'react';
import Component, {mapStateToProps} from '../Component';
import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguage } from '../actions';
import { fallbackValue, mkVector } from '../Tools';
//import { getUserInfo } from '../API';
import logo from '../assets/images/fish.png';
import fadedFish from '../assets/images/fish-faded.png';
class CurrentPage extends Component {
    componentDidMount(){
        var jQuery = window['jQuery'];
    }

	// getSpeciesList = () => {
	// 	try {
	// 		return this.getData("speciesList");
	// 	} catch (err) {
	// 		return this.getLocalSpeciesList()
	// 	}
	// }

	// getLocalSpeciesList = () => {
	// 	try {
	// 		return this.retrieveData("speciesList");
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

    render(){
        var jQuery = window['jQuery'];
		var species = this.getData("speciesList");
		if (species == null) {
			species = this.retrieveData("speciesList")
		}
		var alertSpeciesMessage = this.getData("alertSpeciesToggle");

		return(
            <div>
				<form onSubmit={this.props.onSubmitSpecies}>
					<div className="container onboard">
						<div className="button-navigation">
							<div onClick={this.onPrevClicked}>
								<i className="fa fa-chevron-left"></i>
							</div>
							<button type="submit" onClick={this.onNextClicked}>NEXT</button>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
								<div className="form-group">
									<h2>What are you <br /> fishing for today?</h2>
									<label htmlFor="species-select">e.g. lobster</label>
									<div className="select-wrapper">
										<i className="fa fa-chevron-down"></i>
										<select id="species-select" defaultValue="0" onChange={this.onChangeSpecies} className="form-control">
											<option disabled value="0"> Select </option>
											{
												species.map((currentSpecies, index) => {
											      return (
											        <option key={index} value={currentSpecies}>{currentSpecies}</option>
												)})
											}
										</select>
									</div>
									<p>{alertSpeciesMessage ? 'Pick Species' : ''}</p>
								</div>
							</div>
							<img src={fadedFish} alt="A fish icon" className="faded-icon"/>
						</div>
					</div>
				</form>
            </div>
        );
    }
	onChangeSpecies = (event) => {
		var selectedSpecies = event.target.value;
		console.log('Species chosen: ' + selectedSpecies)
		this.setData("selectedSpecies", selectedSpecies);
	}
	
	onNextClicked =(event)=>{
		event.preventDefault();
		if (this.getData("selectedSpecies") == null) {
			this.setData("alertSpeciesToggle", true)
		} else {
			this.setData("alertSpeciesToggle", false)
			const { history } = this.props;
			history.push("/location");	
		}
	}

	onPrevClicked = (event) => {
		const { history } = this.props;
		history.push("/")
	}
}
export default connect(mapStateToProps)(CurrentPage);
