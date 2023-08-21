'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import Albums from "./Albums";



const Spotify = () => {
    const [album, setAlbum] = useState([])
    const [inputValue, setInputValue] = useState()

    const token = 'BQCxlHMRjFEi3Bw8Nk1VBVSnPLFBDrtwp69KRd7jI_BPekxhhOu_l_KpQ9Gyp3st0UTACuy4Gxyzdk2nJLqwoW9ADC8BvXe7cmFcppu16Cjkl4oRr4E'

        
    const searchArtist = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                'Content-Type' : "application/json",
                'Authorization': `Bearer ${token}`
            },
            params: {
                q: inputValue,
                type: "artist"
            }
        })
      
        var artistID = data.artists.items[0].id

        var artistTracks = await axios.get(`https://api.spotify.com/v1/artists/${artistID}/albums`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                limit: 10,
                market: 'US'
            }
        })

        setAlbum(artistTracks?.data?.items);
    }
    

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

 
    return (
        <div className="spotify">&nbsp;
        <input onChange={handleInputChange} value={inputValue}  /> &nbsp;
        <button onClick={searchArtist}>Search</button>
        <div className="album-container">
        {album?.map((item) => {
            return (
                <Albums item={item}/>
            )
        })}
        </div>
            
        </div>
    )
}

export default Spotify;