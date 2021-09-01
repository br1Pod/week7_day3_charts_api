import React from 'react';
import './SongItem.css';

const SongItem = ({song, onSongClick}) => {

    const handleClick = function() {
        onSongClick(song);
    }

    


    return (
    <li class="list-display" onClick={handleClick}>
        {song["im:name"].label} : {song["im:artist"].label}
        <img class="cover-pic" alt="thumbnail image" src={song["im:image"][1].label} />
    </li>
    )
}

export default SongItem;