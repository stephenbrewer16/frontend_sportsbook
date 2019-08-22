import React, { Component } from 'react'
import MlbCard from '../components/MlbCard'

export default class NhlContainer extends Component {
    renderHockey = () => {
        return this.props.matchups.map(matchup => {
            if (matchup.sport === "Hockey") {
                return <MlbCard wallet={this.props.wallet} key={matchup.id} matchup={matchup} selectMatchup={this.props.selectMatchup} />
            }
        })
    }
    render() {
        return (
            <div className="matchup_container">
                <img className="logo-nhl" src={"https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_3336000/altimages/ff_3336046-ffe53ff739afdeae9e32alt1_full.jpg&w=900"}></img>
                {this.renderHockey()}
            </div>
        )
    }
}
