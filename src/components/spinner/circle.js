import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import { SyncLoader } from 'react-spinners';
import './index.scss'
import 'babel-polyfill';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function Circle() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    })
    const content = loading ? <div className='sweet-loading'>
        <SyncLoader
            css={override}
            sizeUnit={"px"}
            size={10}
            color={'#fff'}
            loading={loading}
        />
    </div> : ''
    return (
        <>
            {content}
        </>

    )
}

export default Circle;