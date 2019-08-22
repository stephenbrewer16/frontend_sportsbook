import React, { Component } from 'react'
import Scores from './Scores';

export default class Tutorial extends Component {
    renderScores = () => {
       return this.props.matchups.map(matchup => {
           return <Scores matchup={matchup}/>
        })
    }
    render() {
        return (
            <div className="tutorial">
                <h1>New to Sports Gambling?</h1>
                <h3>Don't worry we got your back</h3>
                <ul className="vocab">
                    <li>
                        <h3>Points Spread</h3>
                        <p>The point spread is sometimes known as an equalizer for sportsbook operators. All teams aren’t created equally, so sportsbooks can create a point spread for a game so that each team playing has an almost even chance of winning the game. In a way, the point spread will even the field for both teams. The worse of the teams playing in the game is called the underdog. The bettor wins if this team wins the game outright or loses by an amount smaller than the point spread. The underdog in a game is listed as being plus (+) the point spread.</p>
                    </li>
                    <li>
                        <h3>Odds</h3>
                        <p>Point spreads are usually set with -110 odds, but pricing often fluctuates at sportsbooks in New Jersey This is the sportsbook operators’ house edge. The odds guarantee the sportsbook operator will see a little money over time. When the odds are set at -110, the bettor must wager $110 to win $100.</p>
                    </li>
                    <li>
                        <h3>Over/Under</h3>
                        <p>In most cases, when wagering on a total the bettor is simply choosing whether the total number of points scored by both teams will be over or under the listed total of points to be scored. That’s it. The winner and loser of the game don’t matter in a totals bet. The only thing that matters with this kind of bet is the number of points (runs, goals, etc.) scored.</p>
                    </li>
                    <li>
                        <h3>Parlay</h3>
                        <p>A parlay is a single sports wager that involves two or more teams winning. The allure of these bets has always been a larger payout than choosing a single team to win. The larger payouts for a parlay make sense since picking an individual winning side or total is difficult by itself. Picking more than one winner is even more difficult.</p>
                    </li>
                    <li>
                        <h3>Teaser</h3>
                        <p>A teaser bet is a bit of a parlay bet, which allows players to reduce their risk. A teaser bet offers the opportunity to bet on point spreads or game totals, and then “tease” or adjust the line to give them a better chance of winning. Of course, their chances to win come at a cost? which is reduced odds.</p>
                    </li>
                </ul>
                <h2>Yesterday's Final Scores</h2>
                {this.renderScores()}
            </div>
        )
    }
}
