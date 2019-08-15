import React, { Component } from 'react'
import MlbContainer from './MlbContainer';
import NflContainer from './NflContainer';
import NbaContainer from './NbaContainer';
import NhlContainer from './NhlContainer';

export default class MainContainer extends Component {
    state = {
        mlb: false,
        nfl: false,
        nba: false,
        nhl: false
    }

    baseballClick = () => {
        this.setState({
            mlb: !this.state.mlb
        })
    }
    footballClick = () => {
        this.setState({
            nfl: !this.state.nfl
        })
    }
    basketballClick = () => {
        this.setState({
            nba: !this.state.nba
        })
    }
    hockeyClick = () => {
        this.setState({
            nhl: !this.state.nhl
        })
    }

    render() {
        console.log(this.props.currentUser)
        return (
            <div className="main-container">
                <ul>
                    <button className="btn_category" onClick={this.baseballClick}>MLB (Baseball)</button> 
                    <div>
                        {this.state.mlb ? <h1>Major League Baseball</h1> : null}
                        {this.state.mlb ? <MlbContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser}  /> : null}
                    </div>
                    <button className="btn_category" onClick={this.footballClick}>NFL (Football)</button>
                    <div>
                        {this.state.nfl ? <h1>National Football League</h1> : null}
                        {this.state.nfl ? <NflContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                    <button className="btn_category" onClick={this.basketballClick}>NBA (Basketball)</button>
                    <div>
                        {this.state.nba ? <h1>National Basketball Association</h1> : null}
                        {this.state.nba ? <NbaContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                    <button className="btn_category" onClick={this.hockeyClick}>NHL (Hockey)</button>
                    <div>
                        {this.state.nhl ?<h1>National Hockey League</h1> : null}
                        {this.state.nhl ? <NhlContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                </ul>
            </div>
        )
    }
}
