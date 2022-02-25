import React, { Component } from 'react';
import style from '../styles/Favori.module.css';
import { ReactComponent as Pointeur } from '../assets/pointer.svg';

class FavCard extends Component {
    constructor(props){
        super(props);
        this.state = {
          }
    }
    render() {
        return (
            <div>
                <div className={style.Center}>
                <Pointeur alt="pointer" className={style.Icon}/>
                <b className={style.City}>{this.props.city}</b> 
                <br/>
                <div>
                    <b className={style.Temp} >{Math.round(this.props.temp)}°</b>
                    <img className={style.Cloud} src={"http://openweathermap.org/img/wn/"+ this.props.icon +"@2x.png"}></img>
                </div>
                <b className={style.Description}>{this.props.meteo}</b><br/>
                </div>
            </div>
        );
      }
}

export default FavCard;

