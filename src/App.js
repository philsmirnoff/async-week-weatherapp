import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  background: white;
  font-family: Montserrat;
  `;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;



function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=fe4feefa8543e06d4f3c66d92c61b69c`);
    updateWeather(response.data);
  }
  return (
    <Container>
    <AppLabel>Weather App</AppLabel>
    <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
    <WeatherComponent weather={weather} />
    </Container>
  );
}

export default App;
