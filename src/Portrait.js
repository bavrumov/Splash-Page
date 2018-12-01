import React, { Component } from 'react'
import me from './assets/me.jpg'
import ivy from './assets/ivy.jpg'

class Portrait extends Component {
    render() {
        //alert();
        return (
            <img className="rounded-image"
                src={(this.props.name==="ivy.jpg") ? ivy : me}
                width="100%"
                alt="It me"
            />
        )        
    }
}

export default Portrait