import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class WelcomeContainer extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Sportsbook</h1>
                <Link to='/signup'><button className='btn'>Sign Up</button></Link>
                <Link to='/login'><button className='btn'>Login</button></Link>
            </div>
        )
    }
}
