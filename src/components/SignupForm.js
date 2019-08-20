import React, { Component } from 'react'

export default class SignupForm extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        avatar: '',
        wallet: null

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
            body: JSON.stringify({ username: this.state.username, password: this.state.password, email: this.state.email, wallet: this.state.wallet, avatar: this.state.avatar })
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
                    <input className="login_box" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username"></input>
                    <input className="login_box" name="password" value={this.state.password} type="password" onChange={this.handleChange} placeholder="password"></input>
                    <input className="login_box" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email"></input>
                    <input className="login_box" name="wallet" value={this.state.wallet} onChange={this.handleChange} placeholder="wallet"></input>
                    <input className="login_box" name="avatar" value={this.state.avatar} onChange={this.handleChange} placeholder="avatar"></input>
                    <br></br>
                    <button className='btn' type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}


