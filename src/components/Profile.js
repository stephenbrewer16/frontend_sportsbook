import React, { Component } from 'react'
import WagerCard from './WagerCard';

export default class Profile extends Component {

    renderWagers = () => {
        return this.props.currentUser.wagers.map(wager=>{
            return <WagerCard addFunds={this.props.addFunds} wager={wager} currentUser={this.props.currentUser}/>
        })
    }
    render() {
        return (
            <div className="profile">
                <button className="btn_category">COLLECT WINNINGS</button>
                {this.renderWagers()}
            </div>
        )
    }
}
