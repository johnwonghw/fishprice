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
	
    render(){
        var jQuery = window['jQuery'];
		var locationsList = this.getData("locations");
		var speciesList = this.getData("species")
console.log('locationsList', locationsList)
        return(
            <div>
				<h2>Input ur catch/price here!</h2>

					<select id="location-select" defaultValue="0" onChange={this.onLocationChanged} className="form-control">
						<option disabled value="0"> Select </option>
						{locationsList.map((location, index) => {
							return (
								<option key={index} value={location}>{location}</option>
							)
						})}
					</select>
					
				<input placeholder="" />
            </div>
        );
    }
	onLocationChanged = (event) => {
		var selectedLocation = event.target.value;
		console.log('this is the location: ' + selectedLocation)
		this.setData("selectedLocation", selectedLocation);
	}
	
	onNextClicked = (event) => {
		var currentLocation = this.getData('selectedLocation')
		var selectedSpecies = this.getData('selectedSpecies')
		var url = `http://34.201.47.219/api/getPrice?&species=${selectedSpecies}&areaName=${currentLocation}`

		console.log(url)

		axios.get(url)
		.then((res) => {
			if (res['status'] === 200) {
				this.setData('outputList', res['data'])
			}
		})
		const { history } = this.props;
		history.push("/pricing");
	}

	onPrevClicked = (event) => {
		const { history } = this.props;
		history.push("/species")
	}
}
export default connect(mapStateToProps)(CurrentPage);
