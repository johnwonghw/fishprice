import React from 'react';
import Component, { mapStateToProps } from './Component';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import FilterLink from './components/FilterLink';
import Home from './Pages/Home';
import Species from './Pages/Species';
import LocationPage from './Pages/Location';
import Pricing from './Pages/Pricing';
import Marketplace from './Pages/Marketplace';

// import ResetPassword from './Pages/ResetPassword';

import { getSiteString, getSiteLanguages } from './API';
import { setSiteString, setSiteLanguages } from './actions';
import { connect } from 'react-redux';
import { fallbackValue } from './Tools';
import "./App.css";

import axios from 'axios';

class App extends Component {
    componentWillMount(){
        var jQuery = window['jQuery'];

		// windows size change listener
        jQuery(window).on('resize', (event)=>{
			this.setData("windowSize",{
				width:window.innerWidth,
				height:window.innerHeight
			});
        });

		axios.get('http://34.201.47.219/api/getSpecies')
		.then((res) => {
			if (res['status'] === 200) {
				this.setData('species', res['data'])
			}
		})

		axios.get('http://34.201.47.219/api/getLocations')
		.then((res) => {
			if (res['status'] === 200) {
				this.setData('locations', res['data'])
			}
		})
    }

    render() {
        var windowWidth = fallbackValue(window.innerWidth, this, "props", "data","windowSize", "width");
        var windowHeight = fallbackValue(window.innerHeight, this, "props", "data", "windowSize", "height");
        var vmin = Math.min(windowWidth, windowHeight);

        var fontSize = 16 + Math.pow(Math.max(vmin - 320, 0), 0.5) / 4;
		//console.log(fontSize);

        return (
            <Router>
				<div>
					<Route exact path="/" component={Home}/>
					<Route exact path="/species" component={Species}/>
					<Route exact path="/location" component={LocationPage}/>
					<Route exact path="/pricing" component={Pricing}/>
					<Route exact path="/marketplace" component={Marketplace}/>
				</div>
            </Router>
        );
    }
}
export default connect(mapStateToProps)(App);
