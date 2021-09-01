import React from 'react';
import SongItem from './SongItem'

const SongList = ({songs, onSongClick}) => {

    const songsItems = songs.map((song, index) => {
        return <SongItem song={song} key={index} onSongClick={onSongClick}/>
    })

    return (
        <div>
            <ol>
                {songsItems}
            </ol>
        </div>
    )
}

export default SongList;