import React, { Component } from 'react'

export default class StatCard extends Component {
    render() {
        console.log(this.props.winner)
        console.log(this.props.loss)
        return (
            <div>
                {this.props.winner ? 
                <div>
                    {this.props.winner.team}
                </div>
                :
                null
                }
                {this.props.loss ?
                <div>
                    {this.props.loss.team}
                </div>
                :
                null
                }
            </div>
        )
    }
}
