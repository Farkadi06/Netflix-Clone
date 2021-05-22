import axios from '../api/axios';
import React, {useState, useEffect} from 'react'
import "./Banner.css"
import requests from '../api/requests';

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
       async function fetchData() {
           const request = await axios.get(requests.fetchNetflixOriginals);
           setMovie(
               request.data.results[
                   Math.floor(Math.random()*request.data.results.length-1)
               ]
           );
           return request;
       }
       fetchData();
    }, []);
    console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substr(0,n-1) + "...." : string;
    }
    return (
        <div>
            <header
            className="Banner" 
            style={{
                backgroundSize : "cover",
                backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition : "center center"
            }
            }>
                <div className="Banner__content">
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="Banner_buttons">
                        <button className="Banner__button">Play</button>
                        <button className="Banner__button">My list</button>
                    </div>
                    <h1 className="Banner__description">
                        {truncate(
                            movie?.overview,150)}</h1>
                </div>
                <div className="Banner--fadeButton"/>
            </header>
        </div>
    )
}

export default Banner
