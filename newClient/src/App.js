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
// import ResetPassword from './Pages/ResetPassword';

import { getSiteString, getSiteLanguages } from './API';
import { setSiteString, setSiteLanguages } from './actions';
import { connect } from 'react-redux';
import { fallbackValue } from './Tools';
import "./App.css";

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
    }

    render() {
        var windowWidth = fallbackValue(window.innerWidth, this, "props", "data","windowSize", "width");
        var windowHeight = fallbackValue(window.innerHeight, this, "props", "data", "windowSize", "height");
        var vmin = Math.min(windowWidth, windowHeight);

        var fontSize = 16 + Math.pow(Math.max(vmin - 320, 0), 0.5) / 4;
		console.log(fontSize);

        return (
            <Router>
				<Route exact path="/" component={Home}/>
            </Router>
        );
    }
}
export default connect(mapStateToProps)(App);
