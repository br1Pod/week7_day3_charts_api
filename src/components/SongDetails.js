import React from 'react'

function SongDetails({song}) {
    return (
        <div>
            <h4>Track Details</h4>
            <p>Track Name : {song["im:name"].label}</p>
            <p>Artist : {song["im:artist"].label}</p>
            <p>Graphic : {song["im:image"][1].label}</p>
            <p>Preview : {song["link"][2]["href"]}</p>
        </div>
    )
}

export default SongDetails
