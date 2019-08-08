import React, { Component } from 'react'

export default class SignupForm extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        avatar: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password, email: this.state.email, avatar: this.state.avatar })
        })
            .then(resp => resp.json())
            .then(response => {
                if (response.errors) {
                    alert(response.errors)
                } else {
                    this.props.setUser(response)
                }
            })
    }
    render() {
        return (
            <div>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="username"></input>
                    <input name="password" value={this.state.password} type="password" onChange={this.handleChange} placeholder="password"></input>
                    <input name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>
                    <input name="avatar" value={this.state.avatar} onChange={this.handleChange} placeholder="avatar"></input>
                    <button className='login' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}


