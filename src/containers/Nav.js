import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/wallet'><li>Current Balance: ${this.props.currentUser.wallet}.00</li></Link>
                    <Link to='/active-wager'><li>Active Wager</li></Link>
                    <Link to='/profile'><li>Profile</li></Link>
                </ul>
                <button className='btn logout' onClick={this.props.logout}>Logout: {this.props.currentUser ? this.props.currentUser.username : "NOT SIGNED IN"}</button>
                <i className="fas fa-baseball-ball"></i>
                <i class="fas fa-football-ball"></i>
                <i class="fas fa-basketball-ball"></i>
                <i class="fas fa-hockey-puck"></i>
            </div>
        )
    }
}
