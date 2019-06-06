import { useContext } from 'react';
import {MusicPlayerContext} from './MusicPlayerContext'

export function useMusicPlayer(){
    const [state, setState] = useContext(MusicPlayerContext)
    function togglePlay(){
        setState(state => ({...state, isPlaying : !state.isPlaying}))
    }

    function playTrack(index){

        if(index === state.currentTrackIndex){
            togglePlay();
        }
        else{
            state.audioPlayer.pause();
            state.audioPlayer = new Audio(state.tracks[index].file)
            state.audioPlayer.play();
            setState(state => ({...state, isPlaying: true , currentTrackIndex : index}))
        }
    }

    function playPreviousTrack(){
        const newIndex= ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
        playTrack(newIndex)
    }

    function playNextTrack(){
        const newIndex = (state.currentTrackIndex + 1) % state.tracks.length
        playTrack(newIndex)
    }
    return {
        togglePlay,
        playTrack,
        playPreviousTrack,
        playNextTrack,
        currentTrackName : state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
        trackList : state.tracks,
        isPlaying : state.isPlaying
    }

}
