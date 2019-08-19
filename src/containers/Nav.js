import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
    }).format(value)
    render() {
        return (
            <div id="nav">
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/wallet'><li>Current Balance: {this.numberFormat(this.props.currentUser.wallet)}</li></Link>
                    <Link to='/profile'><li>Profile</li></Link>
                    <li onClick={this.props.logout}>Logout: {this.props.currentUser ? this.props.currentUser.username : "NOT SIGNED IN"}</li>
                    <i className="fas fa-baseball-ball" style={this.props.mlb ? { color: "white" } : { color: "gray" }}></i>
                    <i className="fas fa-football-ball" style={this.props.nfl ? { color: "white" } : { color: "gray" }}></i>
                    <i className="fas fa-basketball-ball" style={this.props.nba ? { color: "white" } : { color: "gray" }}></i>
                    <i className="fas fa-hockey-puck" style={this.props.nhl ? { color: "white" } : { color: "gray" }}></i>
                </ul>
            </div>
        )
    }
}
