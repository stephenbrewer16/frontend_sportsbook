import React, { Component } from 'react'
import MlbContainer from './MlbContainer';
import NflContainer from './NflContainer';
import NbaContainer from './NbaContainer';
import NhlContainer from './NhlContainer';

export default class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <ul>
                    <button id="mlb-container" className="btn_category" onClick={this.props.baseballClick}>Baseball</button> 
                    <div>
                    
                        {this.props.mlb ? <MlbContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser}  /> : null}
                    </div>
                    <button id="nfl-container" className="btn_category" onClick={this.props.footballClick}>Football</button>
                    <div>

                        {this.props.nfl ? <NflContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                    <button id="nba-container" className="btn_category" onClick={this.props.basketballClick}>Basketball</button>
                    <div>
                    
                        {this.props.nba ? <NbaContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                    <button id="nhl-container" className="btn_category" onClick={this.props.hockeyClick}>Hockey</button>
                    <div>
                    
                        {this.props.nhl ? <NhlContainer wallet={this.props.wallet} selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser} /> : null}
                    </div>
                </ul>
            </div>
        )
    }
}
