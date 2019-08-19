import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wallet extends Component {
    numberFormat = (value) =>
        new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD'
        }).format(value)
    render() {
        return (
            <div className="addfunds">
                <h3>Current Balance</h3>
                <p>{this.numberFormat(this.props.wallet)}</p>
                <Link to='/addfunds'><button>Add Funds</button></Link>
            </div>
        )
    }
}
