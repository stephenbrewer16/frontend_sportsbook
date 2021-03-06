import React, { Component } from 'react'

export default class WagerForm extends Component {
    state = {
        team: '',
        selected_wager: null,
        odds: null,
        wager_amount: null,
        status: null,
        user_id: ''
    }

    handleChange = (e) => {
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
                    ? this.props.currentMatchupId.away_team_name
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.home_points_spread
                    ? this.props.currentMatchupId.home_team_name
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.over
                    ? "Game Total Over"
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.under
                    ? "Game Total Under"
                    : ':(',
                status: parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.away_points_spread 
                    && this.props.currentMatchupId.away_points_spread < 0
                    && (this.props.currentMatchupId.away_score - this.props.currentMatchupId.home_score) > parseFloat(this.props.currentMatchupId.away_points_spread * -1)
                    ? "Winner"
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.away_points_spread 
                    && this.props.currentMatchupId.away_points_spread > 0
                    && (this.props.currentMatchupId.home_score - this.props.currentMatchupId.away_score) < parseFloat(this.props.currentMatchupId.away_points_spread)
                    ? "Winner"
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.home_points_spread 
                    && this.props.currentMatchupId.home_points_spread < 0
                    && (this.props.currentMatchupId.home_score - this.props.currentMatchupId.away_score) > parseFloat(this.props.currentMatchupId.home_points_spread * -1)
                    ? "Winner"
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.home_points_spread 
                    && this.props.currentMatchupId.home_points_spread > 0
                    && (this.props.currentMatchupId.away_score - this.props.currentMatchupId.home_score) < parseFloat(this.props.currentMatchupId.home_points_spread )
                    ? "Winner"
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.over
                    && (this.props.currentMatchupId.home_score + this.props.currentMatchupId.away_score) > this.props.currentMatchupId.over
                    ? "Winner"
                    : parseFloat(`${this.state.selected_wager}`) === this.props.currentMatchupId.under
                    && (this.props.currentMatchupId.home_score + this.props.currentMatchupId.away_score) < (this.props.currentMatchupId.under * -1)
                    ? "Winner"
                    : 'Loss'
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.wallet >= this.state.wager_amount){ 
        fetch(`http://localhost:3000/wagers`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({ team: this.state.team, selected_wager: this.state.selected_wager, odds: this.state.odds, wager_amount: this.state.wager_amount, status: this.state.status, matchup_id: this.props.currentMatchupId.id, user_id: this.props.currentUser.id })
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
            <div className="wager-form-container">
                <form className="wager-form" onSubmit={this.handleSubmit}>
                    <p>Team: {this.state.team}</p>
                    <label>
                        Select Wager: 
                        <select name="selected_wager" value={this.state.selected_wager} onChange={this.handleChange}>
                            <option value="" disabled selected>Please Select a Wager</option> 
                            <option value={this.props.currentMatchupId.away_points_spread}>{this.props.currentMatchupId.away_team_name} {this.props.currentMatchupId.away_points_spread > 0.0 ? "+" + this.props.currentMatchupId.away_points_spread : this.props.currentMatchupId.away_points_spread}</option> 
                            <option value={this.props.currentMatchupId.home_points_spread}>{this.props.currentMatchupId.home_team_name} {this.props.currentMatchupId.home_points_spread > 0.0 ? "+" + this.props.currentMatchupId.home_points_spread : this.props.currentMatchupId.home_points_spread}</option>
                            <option value={this.props.currentMatchupId.over}>Over: {this.props.currentMatchupId.over > 0.0 ? "+" + this.props.currentMatchupId.over : this.props.currentMatchupId.over}</option>
                            <option value={this.props.currentMatchupId.under}>Under: {this.props.currentMatchupId.under}</option>
                        </select>
                    </label>
                        <p>Odds: {this.state.odds}</p>
                        <input name="wager_amount" value={this.state.wager_amount} onChange={this.handleChange} placeholder="Enter Wager Amount in 00.00 format"></input>
                        <button className="place-wager" type="submit">Submit</button>
                </form>
                <div className="matchup_card">
                    <table>
                        <tr>
                            <th>Team</th>
                            <th>Spread</th>
                            <th>Points Spread Odds</th>
                            <th>Game Total Over/Under Runs</th>
                            <th>Game Total Odds</th>
                        </tr>
                        <tr>
                            <td>Away: {this.props.currentMatchupId.away_team_name}</td>
                            <td>{this.props.currentMatchupId.away_points_spread > 0.0 ? "+" + this.props.currentMatchupId.away_points_spread : this.props.currentMatchupId.away_points_spread}</td>
                            <td>{this.props.currentMatchupId.away_spread_odds > 0.0 ? "+" + this.props.currentMatchupId.away_spread_odds : this.props.currentMatchupId.away_spread_odds}</td>
                            <td>{this.props.currentMatchupId.over > 0.0 ? "+" + this.props.currentMatchupId.over : this.props.currentMatchupId.over}</td>
                            <td>{this.props.currentMatchupId.over_odds > 0.0 ? "+" + this.props.currentMatchupId.over_odds : this.props.currentMatchupId.over_odds}</td>
                        </tr>
                        <tr>
                            <td>Home: {this.props.currentMatchupId.home_team_name}</td>
                            <td>{this.props.currentMatchupId.home_points_spread > 0.0 ? "+" + this.props.currentMatchupId.home_points_spread : this.props.currentMatchupId.home_points_spread}</td>
                            <td>{this.props.currentMatchupId.home_spread_odds > 0.0 ? "+" + this.props.currentMatchupId.home_spread_odds : this.props.currentMatchupId.home_spread_odds}</td>
                            <td>{this.props.currentMatchupId.under > 0.0 ? "+" + this.props.currentMatchupId.under : this.props.currentMatchupId.under}</td>
                            <td>{this.props.currentMatchupId.under_odds > 0.0 ? "+" + this.props.currentMatchupId.under_odds : this.props.currentMatchupId.under_odds}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
