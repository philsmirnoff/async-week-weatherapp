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
  return (
    <Container>
    <AppLabel>Weather App</AppLabel>
    <CityComponent />
    </Container>
  );
}

export default App;
