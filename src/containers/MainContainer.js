import React, { Component } from 'react'

export default class MainContainer extends Component {
    render() {
        console.log(this.props.currentUser)
        return (
            <div>
                {`${this.props.currentUser.username}`}
            </div>
        )
    }
}
