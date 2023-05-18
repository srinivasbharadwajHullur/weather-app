import React,{ useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../App.css';
import WeatherDisplay from './WeatherDisplay';

const SearchCity = () => {
 const [city, setCity] = useState("");
 const [cityName, setCityName] = useState("");
 const [windSpeed, setWindSpeed] = useState({});
 const [country, setCountry] = useState("");
 const [weatherDetails, setWeatherDetails] = useState([]);
 const [visibility, setVisibility] = useState("");
 const [mainDetails, setMainDetails] = useState({});
 const [showCard, setShowCard] = useState(false);
 const [loading, setLoading] = useState(false);

 const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);
    //Call the api to do the weather 
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5800bd29b9bdeb4594af2af31c74787e&units=metric`)
    .then((response) => {
        console.log(response.data)
        setCityName(response.data.name);
        setWindSpeed(response.data.wind);
        setCountry(response.data.sys.country);
        setWeatherDetails(response.data.weather);
        setVisibility(response.data.visibility);
        setMainDetails(response.data.main);
        setShowCard(true);
    })
    .catch((error) => {
        console.log(error);
        setShowCard(false);
    })
    .finally(() => {
        setLoading(false);
    }) 
 }

 useEffect(() => {
    if (city === "") {
        setCityName("");
        setWindSpeed({});
        setCountry("");
        setWeatherDetails([]);
        setVisibility("");
        setMainDetails({});
        setShowCard(false);
    }
 },[city])
  return (
   <Container className='mt-5'>
    <header className='header'>
        Weather App
    </header>
    <Form onSubmit={(e) => handleSubmit(e)}>
    <Form.Group className="mb-3" controlId="formBasicCitySearch">
        <Form.Control 
            type="text" 
            placeholder="Search city..." 
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
      <Button type='submit' style={{ display: 'flex', margin: '0px auto'}} variant="dark">Search</Button>
    </Form>
    {loading ? (
        <p>Loading...</p>
      ) : showCard ? (
        <WeatherDisplay
          cityName={cityName}
          windSpeed={windSpeed}
          country={country}
          weatherDetails={weatherDetails}
          visibility={visibility}
          mainDetails={mainDetails}
        />
      ) : null}
   </Container>
  )
}

export default SearchCity


