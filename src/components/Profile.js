import React, { Component } from 'react'
import WagerCard from './WagerCard';

export default class Profile extends Component {

    renderWagers = () => {
        return this.props.currentUser.wagers.map(wager=>{
            return <WagerCard wallet={this.props.wallet} addFunds={this.props.addFunds} wager={wager} currentUser={this.props.currentUser}/>
        }).reverse()
    }
    render() {
        console.log(this.renderWagers())
        return (
            <div className="profile">
                <h2>{this.props.currentUser.username}</h2>
                <h3>Account Email: {this.props.currentUser.email}</h3>
                <h4>All Wagers:</h4>
                {this.renderWagers()}
            </div>
        )
    }
}
