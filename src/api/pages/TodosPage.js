import React, {useEffect, useState} from 'react';

import {todosRequest} from "../../requests/todosRequest";

export const TodosPage = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosRequest.getAll().then(value => setTodos([...value]))
    },[])
    return (
        <div>
            {
                todos.map(value => )
            }
        </div>
    );
};

