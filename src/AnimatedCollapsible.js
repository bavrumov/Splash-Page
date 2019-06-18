import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import {FaChevronUp, FaChevronDown, FaCircleNotch} from 'react-icons/fa';
import './animation.css';

export default class AnimatedCollapsible extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            status: <FaChevronDown></FaChevronDown>
        };
      }
    
      onEntering() {
        this.setState({ status: <FaCircleNotch className = "icon-spin" /> });
      }
    
      onEntered() {
        this.setState({ status: <FaChevronUp></FaChevronUp> });
      }
    
      onExiting() {
        this.setState({ status: <FaCircleNotch className = "icon-spin"/> });
      }
    
      onExited() {
        this.setState({ status: <FaChevronDown></FaChevronDown> });
      }
    
      toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
      }
    
    render() {
        return (
            <div className="clickable-hover">
                <div onClick={this.toggle}>{this.state.status}</div>
                <Collapse
                    isOpen={this.state.collapse}
                    onEntering={this.onEntering}
                    onEntered={this.onEntered}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    {this.props.text}
                </Collapse>
            </div>
        );
    }
}

