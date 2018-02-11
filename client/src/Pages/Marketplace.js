import React from 'react';
import Component, { mapStateToProps } from '../Component';
import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguage } from '../actions';
import { fallbackValue, mkVector } from '../Tools';
import logo from '../assets/images/fish.png';
import fadedFish from '../assets/images/fish-faded.png';
import fadedHelm from '../assets/images/helm.png';
import axios from 'axios';
import CurrentSellList from '../components/CurrentSellList'

class CurrentPage extends Component {
	componentDidMount() {
		var jQuery = window['jQuery'];
		axios.get() //TODO
		.then((res) => {
			if (res['status'] == 200) {
				this.setData('currentSellData', res.data)
			}
		})
	}

	quantityTextChange = (e) => {
		this.setData('sellQuantity', e.target.value);
	}
	priceTextChange = (e) => {
		this.setData('sellPrice', e.target.value);
	}

	submitSellOrder = (e) => {
		e.preventDefault();
		
		var url = ''
		var postData = {};
		postData['species'] = this.getData('sellSelectedSpecies');
		postData['location'] = this.getData('sellSelectedLocation')
		postData['price'] = this.getData('sellPrice');
		postData['quantity'] = this.getData('sellQuantity');
		axios.post(url, postData)
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

		var currentSellData = this.getData("currentSellData")

		return (
			<div>
				<h2>Input ur catch/price here!</h2>

				<select id="location-select" defaultValue="0" onChange={this.onLocationChanged} className="form-control">
					<option disabled value="0"> Select </option>
					{locations.map((location, index) => {
						return (
							<option key={index} value={location}>{location}</option>
						)
					})}
				</select>

				<select id="species-select" defaultValue="0" onChange={this.onChangeSpecies} className="form-control">
					<option disabled value="0"> Select </option>
					{
						species.map((currentSpecies, index) => {
							return (
								<option key={index} value={currentSpecies}>{currentSpecies}</option>
							)
						})
					}
				</select>
				<form onSubmit={this.submitSellOrder}>
					<input type="number" placeholder="Insert lb of Fish to Sell" onChange={this.quantityTextChange} />
					<input type="number" placeholder="Insert lb of Fish to Sell" onChange={this.priceTextChange} />
					<button onSubmit={this.submitSellOrder}>Post Data</button>
				</form>
				<CurrentSellList currentSellData={currentSellData}/>
			</div>
		);
	}
	onLocationChanged = (event) => {
		var sellSelectedLocation = event.target.value;
		console.log('this is the location: ' + sellSelectedLocation)
		this.setData("sellSelectedLocation", sellSelectedLocation);
	}

	onChangeSpecies = (event) => {

		var sellSelectedSpecies = event.target.value;
		this.setData("sellSelectedSpecies", sellSelectedSpecies);
    }

	onPrevClicked = (event) => {
		const { history } = this.props;
		history.push("/pricing")
	}
}
export default connect(mapStateToProps)(CurrentPage);
