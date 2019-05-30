import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { SyncLoader} from 'react-spinners';
import './index.scss'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading : false
            })
        },2000)
    }
    render() {
        const content = this.state.loading ? <div className='sweet-loading'>
            <SyncLoader
                css={override}
                sizeUnit={"px"}
                size={10}
                color={'#fff'}
                loading={this.state.loading}
            />
        </div> : ''
        return (
            <>
                {content}
            </>

        )
    }
}

export default Circle;