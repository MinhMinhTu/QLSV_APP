import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStepForward, faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { useMusicPlayer } from './useMusicPlayer';
import './index.scss'

export const ControlMusicPlayer = () => {
    const { togglePlay, isPlaying, playPreviousTrack, playNextTrack, currentTrackName } = useMusicPlayer();
    return (
        <>
            <div className="box-controls">
                <marquee class="title_music">{currentTrackName}</marquee>
                <div>
                    <button class="main_btn" onClick={playPreviousTrack} disabled={!currentTrackName}>
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                </div>
                <div>
                    <button class="main_btn" onClick={togglePlay} disabled={!currentTrackName} >
                        {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                    </button>
                </div>
                <div>
                    <button class="main_btn" onClick={playNextTrack} disabled={!currentTrackName}>
                        <FontAwesomeIcon icon={faStepForward} />
                    </button>
                </div>
            </div>

        </>
    )
}