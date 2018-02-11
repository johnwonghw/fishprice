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
import fish from '../assets/images/fish.png';
import ReportPrice from '../components/ReportPrice';
// import scrollToComponent from 'react-scroll-to-component';
import axios from 'axios';


class CurrentPage extends Component {
    componentDidMount(){
        var jQuery = window['jQuery'];
	}
	

	submitForumPost = (e) => {
		var jQuery = window['jQuery'];
		e.preventDefault();
		var url = 'http://34.201.47.219/api/insertMessage'
		var postData = {};
		postData['name'] = this.getData('name');
		postData['phone'] = this.getData('phone');
		postData['comment'] = this.getData('comment');
		postData['soldPrice'] = this.getData('soldPrice');
		postData['buyerName'] = this.getData('buyerName');
		postData['species'] = this.getData('soldSelectedSpecies');
		postData['location'] = this.getData('soldSelectedLocation');

		console.log(postData)

		jQuery.post(url, postData)
		.then((res) => {
			console.log(res)
		})
		console.log('postData', postData)
	}

	estimatePrice = (outputList, selectedLocation, selectedSpecies) => {
		var latestInfo;
		if (outputList != null) {
			outputList.sort((a, b) => {
				return b.year - a.year
			})
			return outputList[0].price;
		}
	}

	

	// quantityTextChange = (e) => {
	// 	this.setData('sellQuantity', e.target.value);
	// }

	// priceTextChange = (e) => {
	// 	this.setData('sellPrice', e.target.value);
	// }

	textChange = (e) => {
		this.setData(e.target.name, e.target.value)
	}

    render(){
        var jQuery = window['jQuery'];
		var selectedSpecies = this.getData("selectedSpecies");
		var selectedLocation = this.getData("selectedLocation");
		var outputList = this.getData('outputList');
		
        return(
			<div>
				<div style={{"height": "100vh", position: 'relative'}}>
					<div>
						<div className="button-navigation">
							<div onClick={this.onPrevClicked}><i className="fas fa-chevron-left"></i></div>
							<button type="submit" onClick={this.onNextClicked}>FORUM</button>
						</div>
						<div className="container">
							<div className="row">
										<div className="col-xs-12 pricing-page">
									<h2>The suggested market <br /> price for <span>{selectedSpecies}</span> in <span>{selectedLocation}</span> is: </h2>
									<p className="price">${this.estimatePrice(outputList, selectedLocation, selectedSpecies)}<span>/lb</span></p>
										<div className="row">
											<div className="col-xs-10 col-xs-offset-1">
												<p className="report-prompt">Help your fishing community find a fair price by reporting your recent sale.</p>
											</div>
										</div>
										<a href="#reportPostContainer" className="fish-button">Report Your Catch</a>
								</div>
							</div>
						</div>
					</div>
<<<<<<< HEAD
					<a href="#reportPostContainer" className="btn btn-primary">Report</a>
=======
>>>>>>> f2af0c033a5c2bb744da5afc8f7d31ebca52bda1
				</div>

				<div id="reportPostContainer" style={{"height": "100vh"}}>
					<ReportPrice submitForumPost={this.submitForumPost} onLocationChanged={this.onLocationChanged} onSpeciesChanged={this.onSpeciesChanged} textChange={this.textChange} />
				</div>
			</div>
        );
	}
	
	onChangeSpecies = (event) => {

		var selectedSpecies = event.target.value;
		console.log('this is the species: ' + selectedSpecies)
		
		this.setData("selectedSpecies", selectedSpecies);
	}

	onPrevClicked = (event) => {
		const { history } = this.props;
		history.push("/location")
	}

	onNextClicked = (event) => {
		const { history } = this.props;
		history.push("/forum");
	}

	onExplanationClick = (event) => {
		const { history } = this.props;
		history.push("/explanation");
	}

	onForumClick = (event) => {
		const { history } = this.props;
		history.push("/forum");
	}

	onLocationChanged = (event) => {
		var soldSelectedLocation = event.target.value;
		console.log('this is the location: ' + soldSelectedLocation)
		this.setData("soldSelectedLocation", soldSelectedLocation);
	}

	onSpeciesChanged = (event) => {
		var soldSelectedSpecies = event.target.value;
		this.setData("soldSelectedSpecies", soldSelectedSpecies);
    }
}
export default connect(mapStateToProps)(CurrentPage);
