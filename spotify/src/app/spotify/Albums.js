import React from "react";

const Albums = ({album}) => {
    return (
        <div className="spotify">&nbsp;
            <div> <img className="cover" src={album?.data?.images?.[0]?.url}/> </div>
            <h3 className="album" >{album?.data?.type?.toUpperCase()}: {album?.data?.name}</h3>
            <div className="artist" >{album?.data?.artists?.[0]?.name}</div>&nbsp;
        </div>
    )
}

export default Albums;