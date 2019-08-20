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
                <h1>Current Balance</h1>
                <h2>{this.numberFormat(this.props.wallet)}</h2>
                <Link to='/addfunds'><button className="btn_money">Add Funds</button></Link>
            </div>
        )
    }
}
