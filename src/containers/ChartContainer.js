import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList';

import './ChartContainer.css';

const ChartContainer = (song) => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);


    useEffect(() => {
        getSongs();
      }, [])

      const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    const onSongClick = function(song){
        setSelectedSong(song);
    }

    return (
        <div>
            <h1>Charts</h1>
            <SongList songs={songs} onSongClick={onSongClick}/>
        </div>
    )
}

export default ChartContainer