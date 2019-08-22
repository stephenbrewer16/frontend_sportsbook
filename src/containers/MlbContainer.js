import React, { Component } from 'react'
import MlbCard from '../components/MlbCard';

export default class MlbContainer extends Component {
    renderBaseball = () =>{
       return this.props.matchups.map(matchup => {
           if(matchup.sport === "Baseball"){
               return <MlbCard wallet={this.props.wallet} key={matchup.id} matchup={matchup} selectMatchup={this.props.selectMatchup}/>
           }
        })
    }

    render() {
        return (
            <div className="matchup_container">
                <img className="logo-mlb" src={"http://content.sportslogos.net/logos/4/490/full/1986.png"}></img>
                {this.renderBaseball()}
            </div>
        )
    }
}
