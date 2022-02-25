import React, { Component } from 'react';
import { connect } from 'react-redux';
import city from '../services/city';
import style from '../styles/SearchCity.module.css';
import { addFavori } from '../store/reducers/favorisReducer';
import SearchCard from './SearchCard';

class SearchCity extends Component {
    constructor(props){
      super(props);
      this.state = {
        id: null,
        city: '',
        temp: null,
        meteo: null,
        icon: null,
        listOfCity: null
      }
      this.handleChange = this.handleChange.bind(this);
    }

    async recherche(name){
      const newCity = await city.getCityMeteo(name);
        console.log(this.props);
      this.setState({ listOfCity: newCity, id: newCity.id, city: newCity.name, temp: newCity.main.temp, meteo: newCity.weather[0].description, icon: newCity.weather[0].icon});
    };

    submitFav = () =>{
      this.props.addFavori({id: this.state.id, city: this.state.name, temp: this.state.temp, meteo: this.state.meteo, icon: this.state.icon});
    };

    handleChange(value){
      this.setState({[value.target.name]: value.target.value});
      
    };

    render() {
        return (
          <div>
            <div className={style.Search}>
            <br></br>
            <input className={style.Input} type="text" name="name" placeholder="Entrez un nom de ville..." value={this.state.name} onChange={this.handleChange}/>
            <button className={style.Button} onClick={()=> this.recherche(this.state.name)}>Rechercher</button>
            </div>
            {this.state.listOfCity && (
              <div>
                <SearchCard key={this.state.listOfCity.id} city={this.state.listOfCity.name} country={this.state.listOfCity.sys.country} temp={this.state.listOfCity.main.temp} icon={this.state.listOfCity.weather[0].icon} meteo={this.state.listOfCity.weather[0].description}/>
                <div className={style.CenterFavButton}>
                  <button className={style.AddFavButton} onClick={()=> this.submitFav()}>Ajouter aux favoris</button>
                </div>
              </div>
            )}
          </div> 

        );
      }
  }

 const mapDispatchToProps = dispatch => {
    return {
      addFavori: (city) => dispatch(addFavori(city))
    }
  };

  const mapStateToProps = state => {
    return {
      listOfCity: state.favoris.listOfCity
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);
