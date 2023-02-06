import {useReducer, useRef} from "react";

import './App.styles.css'

import {Cats} from "./components/Cats";
import {Dogs} from "./components/Dogs";


function reducer(state, action) {

    switch (action.type){
        case 'ADD_CAT':
            const [last] = state.cats.slice(-1)
            const id = last ? last.id+1 : 0
            return {...state, cats: [...state.cats, {id, name: action.payload}]}
        case 'ADD_DOG':
            const [last2] = state.dogs.slice(-1)
            const id2 = last2 ? last2.id2+1 : 0
            return {...state, dogs: [...state.dogs, {id2, name: action.payload}]}
    }
}

const App = () => {
    const inputCat = useRef()
    const inputDog = useRef()

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data)=> data)

    function createCat() {
        dispatch({type: 'ADD_CAT', payload: inputCat.current.value})
        inputCat.current.value = ''
    }

    function createDog() {
        dispatch({type: 'ADD_DOG', payload: inputDog.current.value})
        inputDog.current.value = ''
    }

    return (
        <div className={'main-block'}>
            <div>
                <h1>Cats</h1>
                <input type="text" ref={inputCat}/>
                <button onClick={createCat}>createCat</button>
                <Cats cats={state.cats}/>
            </div>
            <div className={'hr'}></div>
            <div>
                <h1>Dogs</h1>
                <input type="text" ref={inputDog}/>
                <button onClick={createDog}>createDog</button>
                <Dogs dogs={state.dogs}/>
            </div>
        </div>
    );
}

export default App;
