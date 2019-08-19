import React, { Component } from 'react'
import MlbContainer from './MlbContainer';
import NflContainer from './NflContainer';
import NbaContainer from './NbaContainer';
import NhlContainer from './NhlContainer';

export default class MainContainer extends Component {
    render() {
        console.log(this.props.currentUser)
        return (
            <div className="main-container">
                <ul>
                    <button className="btn_category" onClick={this.props.baseballClick}>MLB (Baseball)</button> 
                    <div className="mlb-container">
                        {this.props.mlb ? <h1>Major League Baseball</h1> : null}
                        {this.props.mlb ? <MlbContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser}  /> : null}
                    </div>
                    <button className="btn_category" onClick={this.props.footballClick}>NFL (Football)</button>
                    <div className="nfl-container">
                        {this.props.nfl ? <h1>National Football League</h1> : null}
                        {this.props.nfl ? <NflContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                    <button className="btn_category" onClick={this.props.basketballClick}>NBA (Basketball)</button>
                    <div className="nba-container">
                        {this.props.nba ? <h1>National Basketball Association</h1> : null}
                        {this.props.nba ? <NbaContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                    <button className="btn_category" onClick={this.props.hockeyClick}>NHL (Hockey)</button>
                    <div className="nhl-container">
                        {this.props.nhl ?<h1>National Hockey League</h1> : null}
                        {this.props.nhl ? <NhlContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                </ul>
            </div>
        )
    }
}
