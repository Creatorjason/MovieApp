import { useState } from 'react'
import './App.css'
import SearchIcon from "./search.svg"
import Constants from "./constants"
import MovieCard from './MovieCard'



const API_URL = `http://omdbapi.com?apiKey=${Constants.API_KEY}`

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("")

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data.Search)
        setMovies(data.Search)
    }


  
    return (
        <div className="app">
            <h1>MoviesArena</h1>
            <div className="search">
                <input
                    placeholder='Search for your favorite movies'
                    value={searchValue}
                    onChange={(e) => { 
                        setSearchValue(e.target.value)
                     }}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => {
                        searchMovies(searchValue)
                     }}
                />
            </div>
            {
                movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>) :
                    (<div className="empty">
                        <h2>Sorry🥺, no movies found😭</h2>
                    </div>)
            }

        </div>
    );
}


export default App