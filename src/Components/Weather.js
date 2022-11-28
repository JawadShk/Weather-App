import axios from 'axios';
import React, { Component } from 'react'
import Result from './Result';
import Search from './Search';

class Weather extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       lat: "",
       lon: "",
       weatherData: null,
       city: ""
    }
  }

  changeHandler = (e) =>{
    // console.log(e.target.name);
    const name = e.target.name;
    if(name === "city"){
      this.setState({
        city: e.target.value
      })
    }else if(name === "lat"){
      this.setState({
        lat: e.target.lat
      })
    }else if(name === "lon"){
      this.setState({
        lon: e.target.lon
      })
    }
  }

  locationHandler = () =>{
    this.setState({
      lat: "",
      lom: "",
      city: "",
      weatherData: null
    })
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (res) =>{
          setTimeout(()=>{
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude
            });
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=1a6ec26df32d311118b6fe5a03517d1a`
          )
            .then((result) =>{          
                this.setState({
                  city: result.data.name
                })
              })
              .catch((error) => {
                console.log(error);
              });
          },500)
        },
        (err) =>{
          console.log(err);
        }
      );
    }else{
      console.log("This location is not Detected");
    }
  }

  render() {
    return (
      <div className='container pt-4' style={{height: "500px"}}>
        <Search lat= {this.state.lat} lon={this.state.lon} city={this.state.city} weatherData={this.state.weatherData} change={this.changeHandler} getLocation={this.locationHandler}></Search>
        <Result></Result>
      </div>
    )
  }
}

export default Weather;