import React, {Component} from 'react';
import Display from './display';

const API_KEY = 'ebce2717b6bb8a94709fddaf70348574';

class Form extends Component {

    state = {
        country: null,
        city: null,
        humidity: null,
        dayType: null,
        temperature: null
    }

    updateField = (e) => {
        if(e.target.name === "country") {
            this.setState({
                country: e.target.value
            })
        }
        else {
            this.setState({
                city: e.target.value
            })
        }
    }

    showWeatherData = (data) => {
        this.setState({
            humidity: data.main.humidity,
            dayType: data.weather[0].main,
            temperature: data.main.temp 
        })
    }

    getWeatherInfo = (e) => {
        e.stopPropagation();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`)
        .then((response)=>response.json())
        .then((jsonResponse)=>this.showWeatherData(jsonResponse))
        console.log('fetched!')
    }

    render() {
        return (
            <div>
                Country: <input type="text" name="country" onChange={this.updateField} />
                City:    <input type="text" name="city" onChange={this.updateField} />
                <input type="submit" name="Howz weather" onClick={this.getWeatherInfo}/>
                <Display humidity={this.state.humidity}
                dayType={this.state.dayType}
                temperature={this.state.temperature} />
            </div>
        )
    }
}

export default Form;