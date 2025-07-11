import MovieCard from '../components/MovieCard.jsx';
import { useEffect, useState } from 'react';
import '../css/Home.css';
import { getSearchMovies, getPopularMovies } from '../services/api.js';

function Home() {
    const[searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch (error) {
                console.error("Error fetching popular movies:", error);
                setError("Failed to load popular movies."); 
            }
            finally{
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);
    const handleSearch = async (e) =>{
        e.preventDefault();
        if(!searchQuery.trim()) return;
    }

    
    return (
        <div className='home'>
            <div className='search-form'>
                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        className="search-input"
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search movies..."
                    />
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </form>
            </div>
            {error && <div className='error-message'>{error}</div>}
            {loading ? (<div className='Loading'>LOADING...</div>) : (
            <div className='movie-grid'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />)
                )}
            </div>)}
        </div>
    );
}
export default Home;