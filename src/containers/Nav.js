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
                    <Link to='/home' ><li><i class="fas fa-home"></i></li></Link>
                    <li>Current Balance: {this.numberFormat(this.props.currentUser.wallet)}</li>
                    <Link to='/wallet'><li><i class="far fa-money-bill-alt"></i> Add Funds</li></Link>
                    <li><a href="#mlb-container"><i className="fas fa-baseball-ball" style={this.props.mlb ? { color: "white" } : { color: "rgb(41, 43, 43)" }}></i></a></li>
                    <li><a href="#nfl-container"><i className="fas fa-football-ball" style={this.props.nfl ? { color: "white" } : { color: "rgb(41, 43, 43)" }}></i></a></li>
                    <li><a href="#nba-container"><i className="fas fa-basketball-ball" style={this.props.nba ? { color: "white" } : { color: "rgb(41, 43, 43)" }}></i></a></li>
                    <li><a href="#nhl-container"><i className="fas fa-hockey-puck" style={this.props.nhl ? { color: "white" } : { color: "rgb(41, 43, 43)" }}></i></a></li>
                    <Link to='/tutorial'><li><i class="fas fa-book"></i> Tutorial</li></Link>
                    <Link to='/profile'><li><i class="fas fa-user-circle"></i> Profile</li></Link>
                    <li className="btn-logout" onClick={this.props.logout}><a>Logout: {this.props.currentUser ? this.props.currentUser.username : "NOT SIGNED IN"}</a></li>
                </ul>
            </div>
        )
    }
}
