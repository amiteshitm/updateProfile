import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddUser = () => {
    let history = useHistory()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const onChangeHandler = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const SubmitHandler = async (e) => {
        e.preventDefault()
        await axios.post('/users', user)
        history.push('/')

    }
    const { name, username, email, phone, website } = user
    return (
        <div>
            <div className='container'>
                <div className='w-75 mx-auto shadow p-5'>
                    <h2 className='text-center mb-4'>Add A User</h2>
                    <form onSubmit={e => SubmitHandler(e)}>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Name'
                                name='name'
                                value={name}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Username'
                                name='username'
                                value={username}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Email'
                                name='email'
                                value={email}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Website'
                                name='website'
                                value={website}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input type='text' className='form-control form-control-lg'
                                placeholder='Enter Your Phone'
                                name='phone'
                                value={phone}
                                onChange={e => onChangeHandler(e)}
                            />
                        </div>
                        <button className='btn btn-primary btn-block'>Add User</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddUser