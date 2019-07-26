import React, { Component } from 'react'
import classNames from 'classnames'

export default class FadedHeader extends Component {
    
    render() {
        let side = this.props.side;
        return (
            <header data-aos={"fade-"+this.props.fade} className={classNames("App-header", "slide-header", side)}>
                {this.props.title}
            </header>
        )
    }
}
