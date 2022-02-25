import React, { Component } from 'react';
import weather from '../services/weather';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';

export default class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            positionMeteo: '',
        };
    }

    async componentDidMount()  {
        navigator.geolocation.getCurrentPosition(async (position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            const meteo = await weather.getPositionMeteo(longitude, latitude);
            this.setState({ positionMeteo: meteo });
          })
    }

    render() {
        return (
            <main>
                <Header/>
            {this.state.positionMeteo && (
                <div>
                    <WeatherCard key={this.state.positionMeteo.id} city={this.state.positionMeteo.name} temp={this.state.positionMeteo.main.temp} icon={this.state.positionMeteo.weather[0].icon} meteo={this.state.positionMeteo.weather[0].description} longitude={this.state.positionMeteo.coord.lon} latitude={this.state.positionMeteo.coord.lat} clouds={this.state.positionMeteo.clouds.all} wind={this.state.positionMeteo.wind.speed}/>
                </div>
                
            )}
            </main>
        )
    }
}










