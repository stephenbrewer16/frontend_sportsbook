import React, { Component } from 'react'

export default class AddFunds extends Component {
    state = {
        wallet: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({wallet: parseFloat(this.state.wallet)})
        })
        .then(resp => resp.json())
        .then(response => this.props.addFunds(response))
    }
    handleChange = (e) => {
        this.setState({
            wallet: e.target.value
        })
    }
    render() {
        console.log("wallet", this.state.wallet)
        return (
            <div className="addfunds">
                <form onSubmit={this.handleSubmit}>
                    <input name="wallet" value={this.state.wallet} onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
