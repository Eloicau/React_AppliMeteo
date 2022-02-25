import React, { Component } from "react";
import { connect } from 'react-redux';
import FavCard from "../components/FavCard";
import style from '../styles/Favori.module.css';
import Header from '../components/Header';
import { removeFavori } from "../store/reducers/favorisReducer";

export class Favoris extends Component {
    constructor(props){
        super(props);
        this.state = {
          listOfCity: []
        }
    }

    componentDidMount = () => {
        this.setState({ listOfCity: this.props.listOfCity });
    };

    deleteFav = id => {
        const newListOfCity = this.state.listOfCity.filter(city => city.id !== id);
        this.setState({ listOfCity: newListOfCity });
      };

    componentDidUpdate(prevProps) {
        if (this.props.listOfCity !== prevProps.listOfCity) {
            this.setState({ listOfCity: this.props.listOfCity })
            return true
        }
        return false
    }
  
    render() {
        return (
            <main>
                <Header/>
                {this.state.listOfCity.map((city)=> {
                    return (
                    <h4>
                        <FavCard key={city.id} city={city.city} temp={city.temp} icon={city.icon} meteo={city.meteo}/>
                        <div className={style.CenterButton}>
                            <button className={style.DeleteButton} onClick={() => this.props.removeFavori(city.id)}>Supprimer</button>
                        </div>
                    </h4>
                    )
                })}
            </main>
        );
    }            
}

const mapStateToProps = state => {
    return {
        listOfCity: state.favoris.listOfCity
    }
}

const mapDispatchToProps = dispatch => {
    return {
      removeFavori: (city) => dispatch(removeFavori(city))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Favoris)
