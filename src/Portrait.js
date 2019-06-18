import React, { Component } from 'react'
import me from './assets/me.jpg'

class Portrait extends Component {
    render() {
        return (
            <img 
                style={{borderRadius:"8%"}}
                src={me}
                width="100%"
                alt="It me"
            />
        )        
    }
}

export default Portrait