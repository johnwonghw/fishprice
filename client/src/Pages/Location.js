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
import fadedHelm from '../assets/images/helm.png';
import axios from 'axios';

class CurrentPage extends Component {
    componentDidMount(){
        var jQuery = window['jQuery'];
    }

	// getLocationsList = () => {
	// 	try {
	// 		const locationsList = this.getData("locationsList");
	// 		console.log('lloc', locationsList)
	// 		return locationsList
	// 	} catch (err) {
	// 		console.log('er')
	// 		return this.getLocalLocationsList()
	// 	}
	// }

	// getLocalLocationsList = () => {
	// 	try {
	// 		const locationsList = this.retrieveData("locationsList");
	// 		return locationsList
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

    render(){
			var jQuery = window['jQuery'];
			var locations = this.getData("locationsList");
			if (locations == null) {
				locations = this.retrieveData("locationsList")
			}

			var alertLocationsMessage = this.getData("alertLocationsToggle");

			var selectedSpecies = this.getData("selectedSpecies");

        return(
            <div>
				<form onSubmit={this.props.onSubmitLocation}>
					<div className="container onboard">
						<div className="button-navigation">
							<div onClick={this.onPrevClicked}><i className="fas fa-chevron-left"></i></div>
							<button type="submit" onClick={this.onNextClicked}>NEXT</button>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
								<div className="form-group">
									<h2>Where are you <br/> fishing {selectedSpecies ? `for ${selectedSpecies}` : null} today?</h2>
									<label htmlFor="location-select">e.g. British Columbia</label>
									<div className="select-wrapper">
										<i className="fas fa-chevron-down"></i>
										<select id="location-select" defaultValue="0" onChange={this.onLocationChanged} className="form-control">
											<option disabled value="0"> Select </option>
											{locations.map((location, index) => {
												return (
													<option key={index} value={location}>{location}</option>
												)
									        })}
										</select>
									</div>
									<p>{alertLocationsMessage ? 'Please pick a location' : ''}</p>
								</div>
							</div>
							<img src={fadedHelm} alt="A fish icon" className="faded-icon" />
						</div>
					</div>
				</form>
            </div>
        );
    }
	onLocationChanged = (event) => {
		var selectedLocation = event.target.value;
		console.log('this is the location: ' + selectedLocation)
		this.setData("selectedLocation", selectedLocation);
		this.saveData("selectedLocation", selectedLocation);
	}
	
	onNextClicked = (event) => {
		event.preventDefault();

		var currentLocation = this.getData('selectedLocation')
		var selectedSpecies = this.getData('selectedSpecies')

		// if (currentLocation == null) {
		// 	currentLocation = this.retrieveData('selectedLocation')
		// }
		// if (selectedSpecies == null) {
		// 	selectedSpecies = this.retrieveData('selectedSpecies')
		// }

		if (currentLocation == null) {
			this.setData("alertLocationsToggle", true)
		} else {
			this.setData("alertLocationsToggle", false)
			var coreDataUrl = `http://34.201.47.219/api/getPrice?&species=${selectedSpecies}&areaName=${currentLocation}`

			var weatherDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=Alaska&appid=330f0ff57716437fcf04c60a7902ab8e`

			console.log('coreDataUrl', coreDataUrl)
			console.log('weatherDataUrl', weatherDataUrl)

			axios.get(coreDataUrl)
			.then((res) => {
				if (res['status'] === 200) {
					this.setData('outputList', res['data'])
				}
			})

			axios.get(weatherDataUrl)
			.then((res) => {
				if (res['status'] === 200) {
					this.setData('weather', res.data.weather[0].main)
					this.setData('min_temp', (res.data.main.temp_min - 273.15))
					this.setData('max_temp', (res.data.main.temp_max - 273.15))
				}
			})

			axios
			const { history } = this.props;
			history.push("/pricing");
		}
	}

	onPrevClicked = (event) => {
		const { history } = this.props;
		history.push("/species")
	}
}
export default connect(mapStateToProps)(CurrentPage);
