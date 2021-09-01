import React from 'react';

const SongItem = ({song, onSongClick}) => {

    const handleClick = function() {
        onSongClick(song);
    }

    


    return (
    <li onClick={handleClick}>
        {song["im:name"].label} : {song["im:artist"].label} 
    </li>
    )
}

export default SongItem;