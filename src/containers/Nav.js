import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/wallet'><li>Wallet</li></Link>
                    <Link to='/active-wager'><li>Active Wager</li></Link>
                    <Link to='/users/:id'><li>Profile</li></Link>
                </ul>
                <button className='btn logout' onClick={this.props.logout}>Logout: {this.props.currentUser ? this.props.currentUser.username : "NOT SIGNED IN"}</button>
            </div>
        )
    }
}
