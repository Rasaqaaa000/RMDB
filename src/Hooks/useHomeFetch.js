import API from '../API'
import React from 'react'

const initialState = {
    page: 0,
    result: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [state, setState] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchTerm, page)

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch (error) {
            setError(true)
        }
        setLoading(false)


    }
    //initial render
    React.useEffect(() => {
        // setState(initialState)
        fetchMovies(1, searchTerm)
    }, [searchTerm])

    return { state, loading, error, setSearchTerm }
}