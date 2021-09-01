import React, { useState, useEffect } from 'react';

const ChartContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);


    useEffect(() => {
        getSongs();
      }, [])

      const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs))
    }

    const onSongClick = function(song){
        setSelectedSong(song);
    }

    return (
        <p>Charts container hello</p>
    )








}

export default ChartContainer