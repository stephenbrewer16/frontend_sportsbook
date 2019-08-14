import React, { Component } from 'react'

export default class WagerCard extends Component {
numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
    }).format(value)
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Team</th>
                        <th>Selected Wager</th>
                        <th>Odds</th>
                        <th>Wager Amount</th>
                        <th>Payout</th>
                    </tr>
                    <tr>
                        <td>{this.props.wager.team}</td>
                        <td>{this.props.wager.selected_wager}</td>
                        <td>{this.props.wager.odds}</td>
                        <td>{this.props.wager.wager_amount}</td>
                        <td>{this.props.wager.odds < 0 ? this.numberFormat(this.props.wager.wager_amount / (Math.abs(parseFloat(this.props.wager.odds)) / 100)) : this.numberFormat(this.props.wager.wager_amount * (parseFloat(this.props.wager.odds) / 100))}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
