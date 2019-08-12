import React, { Component } from 'react'

export default class AddFunds extends Component {
    state = {
        wallet: 0
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addFunds(this.state.wallet)
    }
    handleChange = (e) => {
        this.setState({
            wallet: e.target.value
        })
    }
    render() {
        console.log("wallet", this.state.wallet)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="wallet" value={this.state.wallet} onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
