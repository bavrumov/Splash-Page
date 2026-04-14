import React, { Component } from 'react'

export default class Anchor extends Component {
    render() {
        return (
            <a target="_blank" rel="noopener noreferrer" className="App-link" href={this.props.url}>
                {this.props.name}
            </a>
        )
    }
}
