import React, { Component } from 'react'
import WagerCard from './WagerCard';

export default class Profile extends Component {

    renderWagers = () => {
        return this.props.currentUser.wagers.map(wager=>{
            return <WagerCard wallet={this.props.wallet} addFunds={this.props.addFunds} wager={wager} currentUser={this.props.currentUser}/>
        })
    }
    render() {
        return (
            <div className="profile">
                {this.renderWagers()}
            </div>
        )
    }
}
