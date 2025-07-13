import { useContext, useState, useEffect, createContext } from "react";

const MovieContext = createContext();//creates a context
//helper hook to use MovieContext
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    // Stores favorites in local storage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    // Loads favorites from local storage on initial render
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if(storedFavs){
            setFavorites(JSON.parse(storedFavs));
        }
    }, [])

    const addToFav = (movie) => {
        setFavorites(prev => [...prev,movie]);
    }

    const removeFromFav = (movie) => {
        setFavorites(prev => prev.filter(m => m.id !== movie.id))
    }

    const isFav = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFav,
        removeFromFav,
        isFav
    }

    return(
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}
