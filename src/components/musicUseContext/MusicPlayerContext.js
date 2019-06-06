import React, { useState } from 'react'
import Bacphan from '../../asset/music/Bac-Phan-Jack-K-ICM.mp3';
import saoemvotinh from '../../asset/music/Sao-Em-Vo-Tinh-Jack-Liam.mp3';
import vohinhtrongtimem from '../../asset/music/Vo-Hinh-Trong-Tim-Em-Mr-Siro.mp3'


const MusicPlayerContext = React.createContext([{}, () => {}]);
const MusicPlayerProvider = (props) =>{
    const [state, setState] = useState({
        audioPlayer : new Audio(),
        tracks : [
            {
                name: "Bạc Phận",
                file : Bacphan
            },
            {
                name: "sao em vô tình",
                file : saoemvotinh
            },
            {
                name : 'vô hình trong tim em',
                file : vohinhtrongtimem
            }
        ],
        currentTrackIndex: null,
        isPlaying: false
    })
    return (
        <MusicPlayerContext.Provider value ={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    )
}

export {MusicPlayerContext, MusicPlayerProvider}