import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {
        username: '',
        password: '',

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.errors) {
                    alert(response.errors)
                    this.setState({
                        username: '',
                        password: ''
                    })
                } else {
                    this.props.setUser(response)
                }
            })
    }
    render() {
        return (
            <div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="username"></input>
                    <input name="password" value={this.state.password} type="password" onChange={this.handleChange} placeholder="password"></input>
                    <button className='login' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
