import React, { Component } from 'react'
import StatCard from './StatCard';

export default class Stats extends Component {
    state = {
        dubs: false,
        els: false,


    }
    triggerDubs = () => {
        this.setState({
            dubs: !this.state.dubs
        })
    }
    triggerEls = () => {
        this.setState({
            els: !this.state.els
        })
    }
    renderWinners = () => {
       return this.props.winners.map(winner => {
        return <StatCard winner={winner}/>
        })
    }
    renderLosses = () => {
       return this.props.losses.map(loss => {
        return <StatCard loss={loss}/>
        })
    }


    render() {
        return (
            <div>
                <h3>Win Percentage</h3>
                {((this.props.winners.length / this.props.wagers.length) * 100).toFixed(2)}%
                <div>
                    <button className="btn" onClick={this.triggerDubs}>View Wins</button>
                    {this.state.dubs ? <h3>Winners</h3> : null}
                    {this.state.dubs ? this.renderWinners() : null}
                </div>
                <div>
                    <button className="btn" onClick={this.triggerEls}>View Losses</button>
                    {this.state.els ? <h3>Losses</h3> : null}
                    {this.state.els ? this.renderLosses() : null}
                </div>
            </div>
        )
    }
}
