import { useState, useEffect } from 'react';
import './App.css';
import Movielist from './components/Movielist';
import Moviedetail from './components/Moviedetail';import Navbar from './components/Navbar';

const APIKEY = 'd0ae79b8'
const APIURL = 'http://www.omdbapi.com/'

const fetchMovies = async (search = 'The godfather') => {
  if (search.length < 3) {
    return
  }
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search)
    .then(res => res.json())
  const { Error: error, Search: movies, totalResults: totalCount } = response
  return { movies, totalCount, error: error ?? '' }
}

function App() {
  const [movies, setMovies] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [error, setError] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const callAPI = async (search = '') => {
    const data = await fetchMovies(search)
    setError(data.error)
    if (!data.error.length) {
      setMovies(data.movies)
      setSelectedMovie(data.movies[0])
      setTotalCount(data.totalCount)
    }
    else{
      setTotalCount(0)
      setMovies([])
    }
  }

  useEffect(() => {
    callAPI('godfather')
    return () => { }
  }, [])

  return (
    <div className="App">
      <Navbar onSearchChange={callAPI} />
      <header className="App-header">
        <h1>MY FAVORITE MOVIES</h1>
        <h4>titoli trovati: {totalCount}</h4>
      </header>
      {
        !error ? <Movielist movies={movies} /> : <h2 className="text-primary">{error}</h2> 
      }
      <Moviedetail movie={selectedMovie}/>
    </div>
  );
}

export default App;
