import React from 'react';
import SongItem from './SongItem'

const SongList = ({songs, onSongClick}) => {

    const songItems = songs.map((song, index) => {
        return <SongItem song={song} key={index} onSongClick={onSongClick}/>
    })

    return (
        <div>
            <ul>
                {songItems}
            </ul>
        </div>
    )
}

export default SongList;