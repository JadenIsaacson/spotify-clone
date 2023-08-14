'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import Albums from "./Albums";


const Spotify = () => {
    const [album, setAlbum] = useState()

    const token = 'BQAaFA69IhGJjLQmQ3YZIi_YXfPir7dnj9TpJ5z0zVUl7EK1co9Ajvco22NgDfs2omFL6hKfEOT1HlzmT44b_XlF-BZ4p7MXqu_0xh7KluSSE8zIdSo'

    useEffect(() => {
        axios.get(`https://api.spotify.com/v1/albums/${album}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(function (response) {
          // handle success
          console.log(response);
          setAlbum(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }, [])

    return (
        <div>
            {album?.map((item) => {
                return (
                    <li>
                        <Albums item={item}/>
                    </li>
                )
            })}
        </div>
    )
}

export default Spotify;