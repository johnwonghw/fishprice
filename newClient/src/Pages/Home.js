import React from 'react';
import Component, {mapStateToProps} from '../Component';
import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguage } from '../actions';
import { fallbackValue, mkVector } from '../Tools';
//import { getUserInfo } from '../API';
import logo from '../assets/images/fish.png';

class CurrentPage extends Component {
    componentDidMount(){
        var jQuery = window['jQuery'];
    }

    render(){
        var jQuery = window['jQuery'];

        return(
            <div>
				<div className="container onboard">
				  <div className="row">
					<div className="col-xs-12 welcome-message">
					  <img src={logo} alt="Site logo" className="img img-responsive logo" />
					  <h1 className="welcome">Welcome to FishPrice.</h1>
					  <h2 className="tagline">We help you swim through crowd sourcing.</h2>
					  <button onClick={this.startOnboard} className="fish-button">Get Started</button>
					</div>
				  </div>
				</div>
            </div>
        );
    }
}
export default connect(mapStateToProps)(CurrentPage);
