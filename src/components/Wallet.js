import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wallet extends Component {
    render() {
        return (
            <div>
                <h3>Current Balance</h3>
                <p>{this.props.wallet}</p>
                <Link to='/addfunds'><button>Add Funds</button></Link>
            </div>
        )
    }
}
