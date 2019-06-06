import React, { useContext } from 'react';
import { MusicPlayerContext } from './MusicPlayerContext';
import {useMusicPlayer} from './useMusicPlayer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons";


export const TrackList = () => {
    const { isPlaying, trackList, currentTrackName, playTrack } = useMusicPlayer();
    return (
        <>
            {
                trackList.map((track, index) =>
                    <div className="box" key={index}>
                        <div className="iconMusic" onClick={()=> playTrack(index)}>
                            {currentTrackName === track.name && isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay} />}
                        </div>
                        <div className="title-song">
                            {track.name}
                        </div>
                    </div>
                )
            }
        </>
    )
}