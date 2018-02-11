import React from 'react';
import Component, {mapStateToProps} from '../Component';
import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLanguage } from '../actions';
import { fallbackValue, mkVector } from '../Tools';
//import { getUserInfo } from '../API';

class CurrentPage extends Component {
    componentDidMount(){
        var jQuery = window['jQuery'];
        jQuery(document).foundation();
    }

    render(){
        var jQuery = window['jQuery'];

        return(
            <div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>
        );
    }
}
export default connect(mapStateToProps)(CurrentPage);
