import React, { Component } from 'react'
import WagerCard from './WagerCard';

export default class Profile extends Component {
    renderWagers = () => {
        return this.props.currentUser.wagers.map(wager=>{
            return <WagerCard wager={wager} currentUser={this.props.currentUser}/>
        })
    }
    render() {
        return (
            <div>
                {this.renderWagers()}
            </div>
        )
    }
}
