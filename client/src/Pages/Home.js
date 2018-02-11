import React from 'react';
import Component, {mapStateToProps} from '../Component';
import { connect } from 'react-redux';
import { fallbackValue, mkVector } from '../Tools';
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
                      <a className="forum-link" onClick={this.jumpToForum}>Go to FishPrice Forum</a>
					</div>
				  </div>
				</div>
            </div>
        );
    }
    startOnboard=(event)=>{
        const { history } = this.props;
        history.push("species");
    }

    jumpToForum = (event) => {
        const { history } = this.props;
        history.push("forum");
    }
}
export default connect(mapStateToProps)(CurrentPage);
