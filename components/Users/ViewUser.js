import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

const ViewUser = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });
    const { id } = useParams();
    useEffect(() => {
        LoadUser()
    }, [])
    const LoadUser = async () => {
        const result = await axios.get(`/users/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container py-4'>
            <Link className='btn btn-primary' to='/'>back to home</Link>
            <h1 className='display-4'>User Id:{id}</h1>
            <hr />
            <ul className='list-group w-50'>
                <li className='list-group-item'>name:{user.name}</li>
                <li className='list-group-item'>User Name:{user.username}</li>
                <li className='list-group-item'>email:{user.email}</li>
                <li className='list-group-item'>phone:{user.phone}</li>
                <li className='list-group-item'>website:{user.website}</li>
            </ul>
        </div>
    )
}

export default ViewUser