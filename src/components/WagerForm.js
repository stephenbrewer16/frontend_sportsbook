import React, { Component } from 'react'

export default class WagerForm extends Component {
    state = {
        team: '',
        selected_wager: '',
        odds: '',
        wager_amount: '',
        user_id: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
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
    }
    render() {
        return (
            <div>
                <form>
                    <select name="team" value={this.state.team} onChange={this.handleChange}>Select Team
                        <option>{this.props.currentMatchupId.away_team}</option>
                        <option>{this.props.currentMatchupId.home_team}</option>
                    </select>
                </form>
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