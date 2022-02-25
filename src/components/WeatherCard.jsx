import React, { Component } from 'react';
import { ReactComponent as Pointeur } from '../assets/pointer.svg';
import { ReactComponent as Cloud } from '../assets/cloud.svg';
import { ReactComponent as Wind } from '../assets/wind.svg';
import { ReactComponent as Location } from '../assets/location.svg';
import style from '../styles/Accueil.module.css';

class WeatherCard extends Component {
    constructor(props){
        super(props);
        this.state = {
          }
    }
    render() {
        return (
            <div className={style.Table}>
            <div className={style.Center}>
                <Pointeur alt="pointer" className={style.Icon}/>
                <b className={style.City}>{this.props.city}</b> 
                <b className={style.State}> - {this.props.country}</b>
                <br/>
                <div>
                    <b className={style.Temp} >{Math.round(this.props.temp)}°</b>
                    <img className={style.Cloud} src={"http://openweathermap.org/img/wn/"+ this.props.icon +"@2x.png"}></img><br/>
                </div>
                <b className={style.Description}>{this.props.meteo}</b><br/>
            </div>
            <div className={style.Info}>
                <div className={style.WeatherInfo}>
                    <Location alt="location" className={style.WeatherInfoIcon}/><br/>
                    <div className={style.WeatherInfoText}>
                        <b>Longitude</b> <br/>
                        <b className={style.Num}>{this.props.longitude}</b> <br/>
                        <b>Latitude</b> <br/>
                        <b className={style.Num}>{this.props.latitude}</b>
                    </div>
                </div>
                <div className={style.Line}>
                 |
                </div>
                <div className={style.WeatherInfo}>
                    <Cloud alt="cloud" className={style.WeatherInfoIcon}/><br/>
                    <div className={style.WeatherInfoText}>
                        <b>Nuages</b> <br/>
                        <b className={style.Num}>{this.props.clouds} %</b>
                    </div>
                </div>
                <div className={style.Line}>
                 |
                </div>
                <div className={style.WeatherInfo}>
                    <Wind alt="wind" className={style.WeatherInfoIcon}/><br/>
                    <div className={style.WeatherInfoText}>
                        <b>Vent</b> <br/>
                        <b className={style.Num}>{this.props.wind} km/h </b>
                    </div>
                </div>
            </div>
        </div>
        );
      }
}

export default WeatherCard;

