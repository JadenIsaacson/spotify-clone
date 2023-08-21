import React from "react";

const Albums = ({item}) => {
    console.log(item)

    return (
        <div item={item} className="album">&nbsp;
                     <img className="cover" src={item?.images?.[0]?.url}/>
                    <h3 className="album" >{item?.type?.toUpperCase()}: {item?.name}</h3>
                     {item?.artists?.[0]?.name} &nbsp;
        </div>
    )
}

export default Albums;