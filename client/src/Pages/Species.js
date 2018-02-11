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
class CurrentPage extends Component {
    componentDidMount(){
        var jQuery = window['jQuery'];
    }

    render(){
        var jQuery = window['jQuery'];
		var species = this.getData("species");
		console.log(species)
        return(
            <div>
				<form onSubmit={this.props.onSubmitSpecies}>
					<div className="container onboard">
						<div className="button-navigation">
							<div onClick={this.props.onReturnHome}>
								<i className="fa fa-chevron-left"></i>
							</div>
							<button type="submit" onClick={this.onNextClicked}>NEXT</button>
						</div>
						<div className="row">
							<div className="col-xs-12 col-sm-8 col-sm-offset-2 select-container">
								<div className="form-group">
									<h2>What are you <br /> fishing for today?</h2>
									<label htmlFor="species-select">e.g. lobster</label>
									<div className="select-wrapper">
										<i className="fas fa-chevron-down"></i>
										<select id="species-select" defaultValue="0" onChange={this.onChangeSpecies} className="form-control">
											<option disabled value="0"> Select </option>
											{
												species.map((currentSpecies, index) => {
											      return (
											        <option key={index} value={currentSpecies}>{currentSpecies}</option>
												)})
											}
										</select>
									</div>
								</div>
							</div>
							<img src={fadedFish} alt="A fish icon" className="faded-icon"/>
						</div>
					</div>
				</form>
            </div>
        );
    }
	onChangeSpecies = (event) => {

		var selectedSpecies = event.target.value;
		console.log('this is the species: ' + selectedSpecies)
		// this.setState({
		// 	selectedSpecies: selectedSpecies
		// });
		this.setData("selectedSpecies", selectedSpecies);

    }
	onNextClicked =(event)=>{
		const { history } = this.props;
		history.push("/location");
	}
}
export default connect(mapStateToProps)(CurrentPage);
