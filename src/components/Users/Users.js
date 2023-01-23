import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axiosService";
import User from "../User/User";
import UserDetails from "../UserDeatails/UserDetails";

const Users = () => {

    const [users, setUsers] = useState([])
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axiosService.get('/users').then(value => value.data).then(value => console.log(setUsers([...value])))
    }, [])


    return (
        <div>
            <div>
                <h1>Details:</h1>
                {details && <UserDetails user={details}/>}
            </div>
            <hr/>
            <div>
                {users.map(value => <User key={value.id} user={value} setDetails={setDetails}/>)}
            </div>
        </div>
    );
};

export default Users;