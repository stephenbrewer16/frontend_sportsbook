import React, { Component } from 'react'
import MlbCard from '../components/MlbCard'

export default class NflContainer extends Component {
    renderFootball = () => {
        return this.props.matchups.map(matchup => {
            if (matchup.sport === "Football") 
                return <MlbCard wallet={this.props.wallet} key={matchup.id} matchup={matchup} selectMatchup={this.props.selectMatchup} />
        })
    }
render() {
    return (
        <div className="matchup_container">
            {this.renderFootball()}
        </div>
        )
    }
}
