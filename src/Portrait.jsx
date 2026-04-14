import React, { Component } from 'react'
import me from './assets/me2.jpg'
import fun from './assets/fun.gif'

class Portrait extends Component {
    render() {
        return (
            <img 
                style={{borderRadius:"8%"}}
                src={(this.props.name==="fun") ? fun : me}
                width="100%"
                alt="It me"
            />
        )        
    }
}

export default Portrait