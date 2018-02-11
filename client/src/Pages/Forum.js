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
import Comments from '.././components/Comments/Comments'

class CurrentPage extends Component {
	
	render() {
		return (
			<div className="forum-container">
				<div className="button-navigation">
					<div onClick={this.onPrevClicked}><i className="fas fa-chevron-left"></i></div>
					<button type="submit" onClick={this.onNextClicked}>Home</button>
				</div>
				<Comments />
			</div>
		);
	}

	onPrevClicked = (event) => {
		const { history } = this.props;
		history.push("/pricing")
	}
	onNextClicked = (event) => {
		const { history } = this.props;
		history.push("/");
	}
}
export default connect(mapStateToProps)(CurrentPage);
