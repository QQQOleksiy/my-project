import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validator/carValidator";
import {carService} from "../../services";

const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'onBlur', resolver: joiResolver(carValidator)});

    useEffect(() => {
        if(updateCar){
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    },[updateCar])

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(prev => [...prev, data])
        reset()
    }

    const update = async (car) => {
        const {data} = await carService.updateById(updateCar.id, car)
        if (Object.keys(data).length){
            const {data} = await carService.getAll()
            setCars(data)
        }
    }


    return (
        <form onSubmit={handleSubmit(updateCar ? update : submit)}>
            <input type="text" placeholder={'Brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'Price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'Year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{updateCar ? 'Update' : 'Creat'}</button>
        </form>
    );
};

export default CarForm;