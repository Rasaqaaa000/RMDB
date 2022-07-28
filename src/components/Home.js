import React from 'react'
import { useHomeFetch } from '../Hooks/useHomeFetch'
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
//API

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
    const { state, loading, error, setSearchTerm } = useHomeFetch()
    return (
        <>
            {state?.results[0] ? (<HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                text={state.results[0].overview}
                title={state.results[0].original_title}
            />
            ) : null
            }

            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header='Popular Movies'>
                {state?.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            <Spinner />
        </>
    )
}

export default Home
