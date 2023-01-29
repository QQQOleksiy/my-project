import React, {useEffect, useState} from 'react';

import {todosRequest} from "../../requests/todosRequest";
import {Todos} from "../../components/todos/Todos";

export const TodosPage = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        todosRequest.getAll().then(({data}) => setTodos([...data]))
    },[])
    return (
        <div>
            <h1>Todos</h1>
            {
                todos.map(todo => <Todos key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

