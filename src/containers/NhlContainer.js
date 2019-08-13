import React, { Component } from 'react'
import MlbCard from '../components/MlbCard'

export default class NhlContainer extends Component {
    renderHockey = () => {
        return this.props.matchups.map(matchup => {
            if (matchup.sport === "Hockey") {
                return <MlbCard key={matchup.id} matchup={matchup} selectMatchup={this.props.selectMatchup} />
            }
        })
    }
    render() {
        return (
            <div className="matchup_container">
                {this.renderHockey()}
            </div>
        )
    }
}
