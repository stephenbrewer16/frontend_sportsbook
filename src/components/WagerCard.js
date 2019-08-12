import React, { Component } from 'react'

export default class WagerCard extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Team</th>
                        <th>Selected Wager</th>
                        <th>Odds</th>
                        <th>Wager Amount</th>
                    </tr>
                    <tr>
                        <td>{this.props.wager.team}</td>
                        <td>{this.props.wager.selected_wager}</td>
                        <td>{this.props.wager.odds}</td>
                        <td>{this.props.wager.wager_amount}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
