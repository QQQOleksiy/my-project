import logo from './logo.svg';
import './App.css';
import {RickAndMorti} from "./Rick_and_Morti/Rick_and_Morti";

function App() {
  return (
    <div className="App">
      <RickAndMorti
        id={'1'}
        name={'Rick Sanchez'}
        status={'Alive'}
        species={'Human'}
        gender={'Male'}
        image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
      />
      <RickAndMorti
          id={'2'}
          name={'Morty Smith'}
          status={'Alive'}
          species={'Human'}
          gender={'Male'}
          image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
      />
      <RickAndMorti
          id={'3'}
          name={'Summer Smith'}
          status={'Alive'}
          species={'Human'}
          gender={'Female'}
          image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
      />
      <RickAndMorti
          id={'4'}
          name={'Beth Smith'}
          status={'Alive'}
          species={'Human'}
          gender={'Female'}
          image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
      />
      <RickAndMorti
          id={'5'}
          name={'Jerry Smith'}
          status={'Alive'}
          species={'Human'}
          gender={'Male'}
          image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
      />
      <RickAndMorti
          id={'6'}
          name={'Abadango Cluster Princess'}
          status={'Alive'}
          species={'Alien'}
          gender={'Female'}
          image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
      />
    </div>
  );
}

export default App;
