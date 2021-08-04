import axios from 'axios';

const urlAPI = 'https://api.themoviedb.org/3';
const API_KEY = 'd78070597b4736c929950073d938492f';

const api = axios.create({
    baseURL: urlAPI
});

async function getAllPopularMovies(page: number = 1, language: string = 'pt-BR'): Promise<any> {
    return await api.get(`/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`)
}

async function getMovieDetails(id: number, language: string = 'pt-BR'): Promise<any> {
    return await api.get(`/movie/${id}?api_key=${API_KEY}&language=${language}`);
}

async function searchMovieByParam(param: string, page: number = 1, language: string = 'pt-BR'): Promise<any> {
    return await api.get(`/search/movie?api_key=${API_KEY}&language=${language}&query=${param}&page=${page}&include_adult=false`);
}

export {
    getAllPopularMovies,
    getMovieDetails,
    searchMovieByParam
}
