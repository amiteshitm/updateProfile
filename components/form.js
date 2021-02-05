
import React, { Component } from 'react'

import { login } from '../services/login';

import { MDBInput, MDBBtn } from 'mdbreact';
import { Redirect } from 'react-router-dom';


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            toLogin: false,
            errors: {}
        }

        this.baseState = this.state

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        this.setState({ loading: true })
        e.preventDefault()
        e.target.className += " was-validated";
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        console.log('user', user)
        login(user).then(res => {
            if (!res.error) {
                this.setState(() => ({
                    toLogin: true
                }))
            }
        })


    }
    render() {
        if (this.state.toLogin === true) {
            return (<Redirect to='/dashboard' />)
        }
        return (
            <div>
                <form onSubmit={this.onSubmit} id="login-form" action method="post" >

                    <div className="grey-text" >

                        <MDBInput
                            label="Bussiness Email"
                            placeholder
                            icon="envelope "
                            group
                            type="email"
                            name="email"
                            className="validate"
                            size="sm"
                            value={this.state.email_address}
                            onChange={this.onChange}
                            required
                        />
                        <MDBInput
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            name="password"
                            class="validate"
                            size="sm"
                            value={this.state.password}
                            onChange={this.onChange}
                            required
                        />

                    </div>
                    <div className="text-center ">
                        <MDBBtn color="cyan" type="submit">
                            SUBMIT
                  </MDBBtn>
                    </div>

                </form>
            </div>
        )
    }
}

export default Form