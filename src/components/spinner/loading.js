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
export const Loading = () => {
    const [loading, setLoading] = useState(true)
    useEffect(function(){
        const runLoading = setTimeout(() => {
                setLoading(false)
            }, 1500)

        return () => clearTimeout(runLoading)
    },[]);
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
