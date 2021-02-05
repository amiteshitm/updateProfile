import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loaduser()
    }, [])
    const loaduser = async () => {
        const result = await axios.get('users')
        setUsers(result.data.reverse())
    }
    const deletUser = async (id) => {
        await axios.delete(`/users/${id}`)
        loaduser()
    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scop='row'>{index}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link class='btn btn-primary mr-2' to={`/users/${user.id}`}>View</Link>
                                <Link class='btn btn-outline-primary mr-2' to={`/users/edit/${user.id}`}>Edit</Link>
                                <Link class='btn btn-danger' onClick={() => deletUser(user.id)}>Delete</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )

}

export default Home