import React from 'react';
import styled from 'styled-components';


export const WeatherInfoIcons = {
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
};

export const WeatherIcons = {
  '01d': '/icons/sunny.svg',
  '01n': '/icons/night.svg',
  '02d': '/icons/day.svg',
  '02n': '/icons/cloudy-night.svg',
  '03d': '/icons/cloudy.svg',
  '03n': '/icons/cloudy.svg',
  '04d': '/icons/perfect-day.svg',
  '04n': '/icons/cloudy-night.svg',
  '09d': '/icons/rain.svg',
  '09n': '/icons/rain-night.svg',
  '10d': '/icons/rain.svg',
  '10n': '/icons/rain-night.svg',
  '11d': '/icons/rain-night.svg',
  '11n': '/icons/rain-night.svg',
  '50d': './icons/mist-day.svg',
  '50n': './icons/mist-night.svg'
}
const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 25px auto;
`;

const Condition = styled.span`
  margin: auto;
  font-size: 15px;
  & span {
    font-size: 25px;
    font-weight: bold;
  }
`;

const WeatherLogo = styled.img`
  width: 80px;
  height: 80px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  font-weight: bold;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: 15px;
  & span {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name]} />
        <InfoLabel>
          {value}
          <span>{name}</span>
        </InfoLabel>
    </InfoContainer>
  )
}


const WeatherComponent = (props) => {
  const { weather } = props;
  return (
    <>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherCondition>
        <Condition>
          <span>{`${weather?.main?.temp}°F`}</span>
          {`  |  ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
      </WeatherCondition>
      <WeatherInfoContainer>
          <WeatherInfoComponent name="humidity" value={`${weather?.main?.humidity}%`} />
          <WeatherInfoComponent name="wind" value={`${weather?.wind?.speed}mph`} />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
