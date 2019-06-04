import React, { Component } from 'react'
import './index.scss'

class Scroll extends Component {
    constructor(props) {
        super(props);

        this.onScrollToTop = this.onScrollToTop.bind(this);
    }

    onScrollToTop() {
        this.props.onScrollToTop();
    }
    render() {
        return (
            <>
                <a id="arrow" onClick={this.onScrollToTop} style={this.props.onScroll ? { opacity: 1 } : { opacity: 0 }}>></a>
            </>
        )
    }
}

export default Scroll