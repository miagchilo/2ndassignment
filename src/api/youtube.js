import axios from 'axios';
const KEY = 'AIzaSyAKjfLS1G24IPrUz3jli13HNAyHv9vPmwo'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})