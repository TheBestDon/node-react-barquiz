import axios from 'axios';

export const fetchSeason = seasonId => {
    return axios.get(`/api/seasons/${seasonId}`)
        .then(resp => resp.data);
};

export const fetchSeasonList = () => {
    return axios.get('/api/seasons')
        .then(resp => resp.data.seasons);
};

export const fetchGames = gameIds => {
    return axios.get(`/api/games/${gameIds.join(',')}`)
        .then(resp => resp.data.games);
};