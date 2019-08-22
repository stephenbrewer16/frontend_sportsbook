import React, { Component } from 'react'
import WagerCard from './WagerCard';
import Stats from './Stats';

export default class Profile extends Component {
    state = {
        winners: [],
        losses: [],
        stats: false
    }

    renderWagers = () => {
        return this.props.currentUser.wagers.map(wager=>{
            return <WagerCard viewWagers={this.viewWagers} betStats={this.betStats} wallet={this.props.wallet} addFunds={this.props.addFunds} wager={wager} currentUser={this.props.currentUser}/>
        }).reverse()
    }

    betStats = () => {
        this.setState({
            stats: !this.state.stats
        })
    }

    viewWagers = () =>{
        const losses = [...this.state.losses];
        const winners = [...this.state.winners]
        this.props.currentUser.wagers.forEach(wager=> {
            if (wager.status === "Loss" && !losses.includes(wager)){
                losses.push(wager);
            } else if (wager.status === "Payout Completed" && !winners.includes(wager)) {
                winners.push(wager)
            }
        })
         this.setState({
            losses: losses,
            winners: winners
        })
    }

    render() {
        console.log(this.state.losses)
        console.log(this.state.winners)
        return (
            <div className="profile">
                <h2>{this.props.currentUser.username}</h2>
                <h3>Account Email: {this.props.currentUser.email}</h3>
                <div>
                    <button className="btn" onClick={this.betStats}>Show Stats</button>
                    {this.state.stats ? <Stats matchups={this.props.matchups} wagers={this.props.currentUser.wagers} winners={this.state.winners} losses={this.state.losses}/> : null}
                </div>
                <h4>All Wagers:</h4>
                {this.renderWagers()}
            </div>
        )
    }
}
