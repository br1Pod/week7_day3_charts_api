import React from 'react';
import './SongItem.css';

const SongItem = ({song, onSongClick}) => {

    const handleClick = function() {
        onSongClick(song);
    }

    

    return (
    <li class="list-display" onClick={handleClick}>
        <p class="track-name">{song["im:name"].label}
            <br />
            <span>{song["im:artist"].label}</span>
        </p>
        <img class="cover-pic"  
            alt="thumbnail" 
            src={song["im:image"][1].label} />
    </li>
    )
}

export default SongItem;