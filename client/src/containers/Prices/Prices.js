import React, { Component } from 'react';
import fish from '../../assets/images/fish.png';
import axios from 'axios';
import Explanation from '../../components/Explanation/Explanation'

class Prices extends Component {

  
  state = {
    weather: '',
    minTemp: '',
    maxTemp: '',
    pollution: '',
    waveHeight: '',
  }
  
  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Alaska&APPID=cae559b32a35e6e7b07bc8eb252b45a6')
    .then((res)=> {
      if (res['status'] === 200) {
        console.log(res)
        this.setState({
          weather: res.data.weather[0].main, //can be changed to short description
          minTemp: res.data.main.temp_min,
          maxTemp: res.data.main.temp_max,
        })
      }
    })
  }

  render() {
    var { weather, minTemp, maxTemp, pollution, waveHeight } = this.state

    const priceResults = (
      <div>
        <img src={fish} alt="A fish" />
        <h2>Here is the Market Suggested Price for your catch: </h2>
        <p>$17.65 per pound</p>
        <button className="btn btn-primary btn-lg" onClick={this.props.showExplanation} />
      </div>
    )

    return (
      <div>
        {priceResults}
        {this.props.explanation ? <Explanation 
                                    weather={weather} 
                                    minTemp={minTemp}
                                    maxTemp={maxTemp} 
                                    pollution={pollution} 
                                    waveHeight={waveHeight} 
                                  /> : null}
      </div>
    )
  }
}

export default Prices;