import React from 'react'
import './index.scss'

function Scroll(props){
    const onScrollToTop =()=>{
        props.onScrollToTop();
    }
        return (
            <>
                <a id="arrow" onClick={onScrollToTop} style={props.onScroll ? { opacity: 1 } : { opacity: 0 }}>></a>
            </>
        )
}

export default Scroll