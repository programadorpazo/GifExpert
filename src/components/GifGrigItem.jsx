import React from 'react'

const GifGrigItem = (  { id, title, imageUrl } ) => {
    
    return (
        <div className="card animate__animated animate__bounce">
            <img
                src={imageUrl}
                alt={title}
            />
            <p>{title}</p>
        </div>
    )
}

export default GifGrigItem
