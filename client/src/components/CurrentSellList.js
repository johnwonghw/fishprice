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

class CurrentSellList extends Component {
  constructor(props) {
    super(props)
  }

	componentDidMount() {
    
	}


	render() {
    var { CurrentSellList } = this.props
		var jQuery = window['jQuery'];
		return (
			<div>
        {}
			</div>
		);
	}
}
export default CurrentSellList;
