const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bcf822c20933b4e9ded19c2eb2ed04ff'; // Replace with your TMDb API key

export const getSearchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};