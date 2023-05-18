import React from 'react';
import Card from 'react-bootstrap/Card';
import Humidity from './humidity.jpg';
import Pressure from  './pressure.png';
import Visibility from './visibility.png';
import WindSpeed from './windspeed.png';

const WeatherDisplay = ({cityName, windSpeed, country, weatherDetails, visibility, mainDetails}) => {
  
    

  return (
    <Card style={{ width: '18rem', margin: '0px auto', marginTop: 30 }}>
    <Card.Img variant="top" src={`http://openweathermap.org/img/w/${weatherDetails[0].icon}.png`} />
    <Card.Body>
      <Card.Title>{mainDetails.temp} - {weatherDetails[0].description}</Card.Title>
      <Card.Title>{cityName} , {country}</Card.Title>
      <Card.Subtitle>Weather Information</Card.Subtitle>
      <div className='flex'>
        <div className='weather-details-styles-flex'>
            <Card.Img style={{ width: 30, height: 30, marginRight: 5}} variant="top" src={Visibility}/>
            <Card.Text>{visibility}</Card.Text>
        </div>
        <div className='weather-details-styles-flex'>
            <Card.Img style={{ width: 30, height: 30, marginRight: 5}} variant="top" src={WindSpeed}/>
            <Card.Text>{windSpeed.speed}</Card.Text>
        </div>
      </div>
      <div className='flex'>
        <div className='weather-details-styles-flex'>
            <Card.Img style={{ width: 30, height: 30, marginRight: 5}} variant="top" src={Humidity} />
            <Card.Text>{mainDetails.humidity}</Card.Text>
        </div>
        <div className='weather-details-styles-flex'>
            <Card.Img style={{ width: 30, height: 30, marginRight: 5}} variant='top' src={Pressure}/>
            <Card.Text>{mainDetails.pressure}</Card.Text>
        </div>
      </div>
    </Card.Body>
  </Card>
  )
}

export default WeatherDisplay