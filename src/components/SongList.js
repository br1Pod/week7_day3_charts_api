import React from 'react';
import SongItem from './SongItem'
import './SongList.css';

const SongList = ({songs, onSongClick}) => {

    const songsItems = songs.map((song, index) => {
        return <SongItem song={song} key={index} onSongClick={onSongClick}/>
    })

    return (
        <div>
            <ol id='song-ordered-list'>
                {songsItems}
            </ol>
        </div>
    )
}

export default SongList;