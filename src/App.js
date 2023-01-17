import logo from './logo.svg';
import './App.css';
import {Simpsons} from "./Simpsons/Simpsons";

function App() {
    return (
        <div className="App">
            <Simpsons
                name={'Homer'}
                img={'https://static.wikia.nocookie.net/simpsons/images/8/8d/Swimsuit_Homer.png'}
            />
            <Simpsons
                name={'Marg'}
                img={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
            />
            <Simpsons
                name={'Bart'}
                img={'https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png'}
            />
            <Simpsons
                name={'Lisa'}
                img={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
            />
            <Simpsons
                name={'Maggie'}
                img={'https://static.wikia.nocookie.net/simpsons/images/4/45/Star_Snowsuit_Maggie.png'}
            />
        </div>
    );
}

export default App;
