import React, { Component } from 'react'

export default class WagerForm extends Component {
    state = {
        team: '',
        selected_wager: null,
        odds: null,
        wager_amount: null,
        user_id: ''
    }

    handleChange = (e) => {
        console.log('first', parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.away_points_spread)
        this.setState({
            [e.target.name]: e.target.value,
        },() =>{
            this.setState({
                odds: parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.away_points_spread
                    ? parseFloat(`${this.props.currentMatchupId.away_spread_odds}`)
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.home_points_spread
                    ? parseFloat(`${this.props.currentMatchupId.home_spread_odds}`)
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.over
                    ? parseFloat(`${this.props.currentMatchupId.over_odds}`)
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.under
                    ? parseFloat(`${this.props.currentMatchupId.under_odds}`)
                    : ':(',
                team: parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.away_points_spread
                    ? this.props.currentMatchupId.away_team
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.home_points_spread
                    ? this.props.currentMatchupId.home_team
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.over
                    ? "Game Total Over"
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.under
                    ? "Game Total Under"
                    : ':('
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.wallet > this.state.wager_amount){ 
        fetch('http://localhost:3000/wagers', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({ team: this.state.team, selected_wager: this.state.selected_wager, odds: this.state.odds, wager_amount: this.state.wager_amount, matchup_id: this.props.currentMatchupId.id, user_id: this.props.currentUser.id })
        })
            .then(resp => resp.json())
            .then(response => {
                    this.props.addWager(response)
                }
            )
            fetch(`http://localhost:3000/users/${this.props.currentUser.id}/bet`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify({ bet: parseFloat(this.state.wager_amount) })
            })
                .then(resp => resp.json())
                .then(response => this.props.subtractFunds(response))
        }else{
            alert("You do not have enough funds to place this wager.  Please add more to your wallet")
        }
    }
    render() {
        return (
            <div>
                <form className="wager-form" onSubmit={this.handleSubmit}>
                    <p>Team: {this.state.team}</p>
                    <label>
                        Select Wager: 
                        <select name="selected_wager" value={this.state.selected_wager} onChange={this.handleChange}> 
                            <option>{this.props.currentMatchupId.away_points_spread}</option> 
                            <option>{this.props.currentMatchupId.home_points_spread}</option>
                            <option>{this.props.currentMatchupId.over}</option>
                            <option>{this.props.currentMatchupId.under}</option>
                        </select>
                    </label>
                        <p>Odds: {this.state.odds}</p>
                        <input name="wager_amount" value={this.state.wager_amount} onChange={this.handleChange} placeholder="Enter Wager Amount in 00.00 format"></input>
                        <button className="place-wager" type="submit">Submit</button>
                </form>
                <table>
                    <tr>
                        <th>Team</th>
                        <th>Spread</th>
                        <th>Points Spread Odds</th>
                        <th>Game Total Over/Under Runs</th>
                        <th>Game Total Odds</th>
                    </tr>
                    <tr>
                        <td>{this.props.currentMatchupId.away_team}</td>
                        <td>{this.props.currentMatchupId.away_points_spread}</td>
                        <td>{this.props.currentMatchupId.away_spread_odds}</td>
                        <td>{this.props.currentMatchupId.over}</td>
                        <td>{this.props.currentMatchupId.over_odds}</td>
                    </tr>
                    <tr>
                        <td>{this.props.currentMatchupId.home_team}</td>
                        <td>{this.props.currentMatchupId.home_points_spread}</td>
                        <td>{this.props.currentMatchupId.home_spread_odds}</td>
                        <td>{this.props.currentMatchupId.under}</td>
                        <td>{this.props.currentMatchupId.under_odds}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
// t.string "team"
// t.float "selected_wager"
// t.integer "odds"
// t.float "wager_amount"
// t.bigint "user_id"
// t.bigint "matchup_id"