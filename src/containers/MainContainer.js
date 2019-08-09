import React, { Component } from 'react'
import MlbContainer from './MlbContainer';

export default class MainContainer extends Component {
    state = {
        mlb: false,
    }

    baseballClick = () => {
        this.setState({
            mlb: !this.state.mlb
        })
    }

    render() {
        console.log(this.props.currentUser)
        return (
            <div>
                <ul>
                    <button onClick={this.baseballClick}>MLB</button> 
                    <div>
                        {this.state.mlb ? <MlbContainer selectMatchup={this.props.selectMatchup} matchups={this.props.matchups} currentUser={this.props.currentUser}  /> : null}
                    </div>
                    <button>NFL</button>
                </ul>
            </div>
        )
    }
}
