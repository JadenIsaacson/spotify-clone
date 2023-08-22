import React from "react";

const Albums = ({item}) => {
    console.log(item)
    const year = item.release_date.split('-')?.[0]

    return (
        <div className="album">
                     <img className="cover" src={item?.images?.[0]?.url}/>
                     <h3 className="album-name" >{item?.name}</h3>
                     <div className="year">{year} • {item?.artists?.[0]?.name}</div>

        </div>
    )
}

export default Albums;