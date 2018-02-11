import React from 'react';
import Component, { mapStateToProps } from './Component';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import FilterLink from './components/FilterLink';
import Home from './Pages/Home';
import Species from './Pages/Species';
import LocationPage from './Pages/Location';
import Pricing from './Pages/Pricing';
import Forum from './Pages/Forum';
import Explanation from './Pages/Explanation';

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
				this.setData('speciesList', res['data'])
				this.saveData('speciesList', res['data'])
			}
		})

		axios.get('http://34.201.47.219/api/getLocations')
		.then((res) => {
			if (res['status'] === 200) {
				this.setData('locationsList', res['data'])
				this.saveData('locationsList', res['data'])
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
				<div className="react-root">
					<Route exact path="/" component={Home}/>
					<Route exact path="/species" component={Species}/>
					<Route exact path="/location" component={LocationPage}/>
					<Route exact path="/pricing" component={Pricing}/>
					<Route exact path="/forum" component={Forum}/>
					<Route exact path="/explanation" component={Explanation}/>
					<footer>
						<span>&copy; 2018 FishPrice</span>
					</footer>
				</div>
            </Router>
        );
    }
}
export default connect(mapStateToProps)(App);
