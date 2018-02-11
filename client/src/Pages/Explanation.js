import React from 'react';
import Component, { mapStateToProps } from '../Component';
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

	render() {
		var jQuery = window['jQuery'];

    var weather = this.getData("weather")
    var minTemp = this.getData("min_temp")
		var maxTemp = this.getData("max_temp")


		return (
			<div>
				<h2>Why why WHYYY!</h2>
          {weather}
          {minTemp} - {maxTemp}
			</div>
		);
  }
  
	onLocationChanged = (event) => {
		var sellSelectedLocation = event.target.value;
		console.log('Location chosen: ' + sellSelectedLocation)
		this.setData("sellSelectedLocation", sellSelectedLocation);
	}

	onPrevClicked = (event) => {
		const { history } = this.props;
		history.push("/pricing")
	}
}
export default connect(mapStateToProps)(CurrentPage);
