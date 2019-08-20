import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MlbCard extends Component {
    render() {
    console.log(this.props.wallet)
        return (
            <div className="matchup_card">
                <table>
                    <tr>
                        <th className="team_column">Team</th>
                        <th className="team_column">Spread</th>
                        <th className="team_column">Points Spread Odds</th>
                        <th className="team_column">Game Total Over/Under Runs</th>
                        <th className="team_column">Game Total Odds</th>
                    </tr>
                        <tr>
                            <td>{this.props.matchup.away_team_name}</td>
                            <td>{this.props.matchup.away_points_spread > 0.0 ? "+" + this.props.matchup.away_points_spread : this.props.matchup.away_points_spread}</td>
                            <td>{this.props.matchup.away_spread_odds > 0.0 ? "+" + this.props.matchup.away_spread_odds : this.props.matchup.away_spread_odds}</td>
                            <td>{this.props.matchup.over > 0.0 ? "+" + this.props.matchup.over : this.props.matchup.over}</td>
                            <td>{this.props.matchup.over_odds > 0.0 ? "+" + this.props.matchup.over_odds : this.props.matchup.over_odds}</td>
                        </tr>
                        <tr>
                            <td>{this.props.matchup.home_team_name}</td>
                            <td>{this.props.matchup.home_points_spread > 0.0 ? "+" + this.props.matchup.home_points_spread : this.props.matchup.home_points_spread}</td>
                            <td>{this.props.matchup.home_spread_odds > 0.0 ? "+" + this.props.matchup.home_spread_odds : this.props.matchup.home_spread_odds}</td>
                            <td>{this.props.matchup.under > 0.0 ? "+" + this.props.matchup.under : this.props.matchup.under}</td>
                            <td>{this.props.matchup.under_odds > 0.0 ? "+" + this.props.matchup.under_odds : this.props.matchup.under_odds}</td>
                        </tr>
                </table>
                <Link to="/wagerform"><button className='btn_bet' onClick={() => this.props.selectMatchup(this.props.matchup) }>Place Bet</button></Link>
            </div>
        )
    }
}
