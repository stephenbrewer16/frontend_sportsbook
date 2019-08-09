import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MlbCard extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Team</th>
                        <th>Spread</th>
                        <th>Points Spread Odds</th>
                        <th>Game Total Over/Under Runs</th>
                        <th>Game Total Odds</th>
                    </tr>
                        <tr>
                            {/* <td>{this.props.matchup.away.name}</td> */}
                            <td>{this.props.matchup.away_team}</td>
                            <td>{this.props.matchup.away_points_spread}</td>
                            <td>{this.props.matchup.away_spread_odds}</td>
                            <td>{this.props.matchup.over}</td>
                            <td>{this.props.matchup.over_odds}</td>
                        </tr>
                        <tr>
                            {/* <td>{this.props.matchup.home.name}</td> */}
                            <td>{this.props.matchup.home_team}</td>
                            <td>{this.props.matchup.home_points_spread}</td>
                            <td>{this.props.matchup.home_spread_odds}</td>
                            <td>{this.props.matchup.under}</td>
                            <td>{this.props.matchup.under_odds}</td>
                        </tr>
                </table>
                <Link to="/wagerform"><button className='btn' onClick={()=> this.props.selectMatchup(this.props.matchup)}>Place Bet</button></Link>
            </div>
        )
    }
}
