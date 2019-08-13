import React, { Component } from 'react'
import MlbCard from '../components/MlbCard'

export default class NbaContainer extends Component {
    renderBasketball = () => {
        return this.props.matchups.map(matchup => {
            if (matchup.sport === "Basketball") {
                return <MlbCard key={matchup.id} matchup={matchup} selectMatchup={this.props.selectMatchup} />
            }
        })
    }
    render() {
        return (
            <div className="matchup_container">
                {this.renderBasketball()}
            </div>
        )
    }
}
