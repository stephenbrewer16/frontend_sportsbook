import React, { Component } from 'react'

export default class WagerCard extends Component {
    state = {
        payout: 0
    }
numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
    }).format(value)

componentDidMount() {
    this.setPayout()
}


setPayout = () => {
    let newPayout
    if (this.props.wager.odds < 0){
       newPayout =  this.numberFormat(this.props.wager.wager_amount / (Math.abs(parseFloat(this.props.wager.odds)) / 100))
    }else{
       newPayout =  this.numberFormat(this.props.wager.wager_amount * (parseFloat(this.props.wager.odds) / 100))
    }
    this.setState({
        payout: newPayout
    })
    return newPayout
}
    render() {
        console.log(this.state.payout)
        return (
            <div className="matchup_card">
                <table>
                    <tr>
                        <th>Team</th>
                        <th>Points Spread</th>
                        <th>Odds</th>
                        <th>Wager Amount</th>
                        <th>Payout</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>{this.props.wager.team}</td>
                        <td>{this.props.wager.selected_wager}</td>
                        <td>{this.props.wager.odds}</td>
                        <td>{this.numberFormat(this.props.wager.wager_amount)}</td>
                        <td>{this.state.payout}</td>
                        <td>{this.props.wager.status}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
