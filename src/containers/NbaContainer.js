import React, { Component } from 'react'
import MlbCard from '../components/MlbCard'

export default class NbaContainer extends Component {
    renderBasketball = () => {
        return this.props.matchups.map(matchup => {
            if (matchup.sport === "Basketball") {
                return <MlbCard wallet={this.props.wallet} key={matchup.id} matchup={matchup} selectMatchup={this.props.selectMatchup} />
            }
        })
    }
    render() {
        return (
            <div className="matchup_container">
                <img className="logo-nba" src={"https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=700"}></img>
                {this.renderBasketball()}
            </div>
        )
    }
}
