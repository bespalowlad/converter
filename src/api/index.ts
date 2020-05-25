import axios from 'axios'

const API_KEY: string = `3a06d412960b4f017361f492d59765a72c8cd3266d7e0ac360df95b1d3aae70d`;

export const loadCoins = () => {
    return axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${API_KEY}`)
}