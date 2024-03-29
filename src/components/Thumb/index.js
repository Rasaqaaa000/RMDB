import React from 'react'
import { Image } from './Thumb.styles'

const Thumb = (image, movieId, clickable) => {
    return (
        <div>
            <Image src={image} alt='movie-thumbnail' />
        </div>
    )
}

export default Thumb
