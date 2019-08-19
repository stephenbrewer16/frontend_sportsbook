import React, { Component } from 'react'
import { Link } from 'react-scroll'
import MlbContainer from './MlbContainer';
import NflContainer from './NflContainer';
import NbaContainer from './NbaContainer';
import NhlContainer from './NhlContainer';

export default class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <ul>
                    <button id="mlb-container" className="btn_category" onClick={this.props.baseballClick}>MLB (Baseball)</button> 
                    <div>
                        {this.props.mlb ? <h1>Major League Baseball</h1> : null}
                        {this.props.mlb ? <MlbContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser}  /> : null}
                    </div>
                    <button id="nfl-container" className="btn_category" onClick={this.props.footballClick}>NFL (Football)</button>
                    <div>
                        {this.props.nfl ? <h1>National Football League</h1> : null}
                        {this.props.nfl ? <NflContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                    <button id="nba-container" className="btn_category" onClick={this.props.basketballClick}>NBA (Basketball)</button>
                    <div>
                        {this.props.nba ? <h1>National Basketball Association</h1> : null}
                        {this.props.nba ? <NbaContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                    <button id="nhl-container" className="btn_category" onClick={this.props.hockeyClick}>NHL (Hockey)</button>
                    <div>
                        {this.props.nhl ?<h1>National Hockey League</h1> : null}
                        {this.props.nhl ? <NhlContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                </ul>
            </div>
        )
    }
}
