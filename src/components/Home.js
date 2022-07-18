import React from 'react'
import { useHomeFetch } from '../Hooks/useHomeFetch'
import HeroImage from './HeroImage'
//API

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
    const { state, loading, error } = useHomeFetch
    return (
        <>
            {/* {state.results[0] ? (<HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                text={state.results[0].overview}
                title={state.results[0].original_title}
            />
            ) : null
            } */}
            <h2>HEllo</h2>
        </>
    )
}

export default Home
