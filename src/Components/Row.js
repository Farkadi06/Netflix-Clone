import axios from '../api/axios';
import React, {useState,useEffect}from 'react'
import './Row.css'

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);
    return (
        <div className="Row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt=""/>
                ))}
            </div>
        </div>
    )
}

export default Row
