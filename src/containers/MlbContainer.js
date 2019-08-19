import React, { Component } from 'react'
import MlbCard from '../components/MlbCard';

export default class MlbContainer extends Component {
    renderBaseball = () =>{
       return this.props.matchups.map(matchup => {
           return <MlbCard wallet={this.props.wallet} key={matchup.id} matchup={matchup} selectMatchup={this.props.selectMatchup}/>
        })
    }

    render() {
        return (
            <div className="matchup_container">
                {this.renderBaseball()}
            </div>
        )
    }
}
