const API_KEY = "08f2e785efaba7bdc467412eee4da8e3";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/dicover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies:`/dicover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies:`/dicover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `/dicover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `/dicover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default requests;