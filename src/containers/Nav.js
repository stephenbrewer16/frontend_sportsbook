import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <p>PROFILE</p>
                <p>WALLET</p>
                <p>ACTIVE WAGERS</p>
                <button className='btn logout' onClick={this.props.logout}>Logout: {this.props.currentUser ? this.props.currentUser.username : "NOT SIGNED IN"}</button>
            </div>
        )
    }
}
