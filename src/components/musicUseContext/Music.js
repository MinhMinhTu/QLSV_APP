import React from 'react'
import {MusicPlayerProvider} from './MusicPlayerContext';
import {TrackList} from './TrackList';
import {ControlMusicPlayer} from './ControlMusicPlayer'
import './index.scss'

export const Music = () => {
    return (
        <div className="music">
            <MusicPlayerProvider>
                <TrackList />
                <ControlMusicPlayer />
            </MusicPlayerProvider>
        </div>
    )
}
