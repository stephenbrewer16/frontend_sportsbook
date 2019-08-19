import React, { Component } from 'react'

export default class WagerCard extends Component {
    state = {
        payout: 0
    }
numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
    }).format(value)

componentDidMount() {
    this.setPayout()
}



setPayout = () => {
    let newPayout
    if (this.props.wager.odds < 0){
       newPayout =  this.props.wager.wager_amount / (Math.abs(parseFloat(this.props.wager.odds)) / 100)
    }else{
       newPayout =  this.props.wager.wager_amount * (parseFloat(this.props.wager.odds) / 100)
    }
    this.setState({
        payout: newPayout
    }, () => {
        if (this.props.wager.status === "Winner"){
        console.log(this.state.payout)
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({ 
                wallet: parseFloat(this.props.wager.wager_amount + this.state.payout),
                wager_id: this.props.wager.id
            })
        })
            .then(resp => resp.json())
            .then(response => this.props.addFunds(response))
    }
    })
}
    render() {
        return (
            <div className="wager_card" style={this.props.wager.status === "Loss" ? { borderColor: "red" } : { borderColor: "chartreuse"}}>
                <table>
                    <tr>
                        <th>Team</th>
                        <th>Points Spread</th>
                        <th>Odds</th>
                        <th>Wager Amount</th>
                        <th>Payout</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>{this.props.wager.team}</td>
                        <td>{this.props.wager.selected_wager}</td>
                        <td>{this.props.wager.odds}</td>
                        <td>{this.numberFormat(this.props.wager.wager_amount)}</td>
                        <td>{this.numberFormat(this.state.payout)}</td>
                        <td>{this.props.wager.status}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
