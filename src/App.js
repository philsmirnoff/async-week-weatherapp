import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';
import Video1 from './components/video/video-1.mp4';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 8px 8px 0 #555;
  padding: 40px 20px;
  border-radius: 4px;
  // background: white;
  font-family: Montserrat;
  `;

const AppLabel = styled.span`
  color: white;
  margin: 20px auto;
  font-size: 25px;
  font-weight: bold;
`;

const Video = styled.video`
  object-fit: cover;
  margin-top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
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
    <Video autoPlay='autoPlay' muted loop>
    <source src={Video1} type="video/mp4" />
    </Video>
    </Container>
  );
}

export default App;
