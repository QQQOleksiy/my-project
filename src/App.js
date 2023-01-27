import {useEffect, useState} from "react";

import CarForm from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";

import {carService} from "./services";

const App = () => {
    const [cars, setCars] = useState([])

    const [updateCar, setUpdateCar] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))
    }, [])

  return (
    <div>
      <CarForm setCars={setCars} updateCar={updateCar}/>
      <hr/>
      <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
    </div>
  );
}

export default App;
