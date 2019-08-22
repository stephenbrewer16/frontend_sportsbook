import React, { Component } from 'react'

export default class Scores extends Component {

    render() {
        return (
            <div className="matchup_card">
                <table>
                    <tr>
                        <th className="team_column">Team</th>
                        <th className="team_column">Score</th>
                        <th className="team_column">Sport</th>
                    </tr>
                    <tr>
                        <td>{this.props.matchup.home_team_name}</td>
                        <td>{this.props.matchup.home_score}</td>
                        <td>{this.props.matchup.sport}</td>
                    </tr>
                    <tr>
                        <td>{this.props.matchup.away_team_name}</td>
                        <td>{this.props.matchup.away_score}</td>
                        <td>{this.props.matchup.sport}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
