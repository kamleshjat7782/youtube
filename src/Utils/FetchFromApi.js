import axios from 'axios';

const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {maxResults: '50',},
  headers: {
    // 'X-RapidAPI-Key': 'process.env.API_KEY',
    // 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    "method": "GET",

    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    "x-rapidapi-key": "369d43d2a0mshc1d42b258e9cf9dp1ea1cfjsn789d0b45ba97"
  }
};



export const FetchFromApi = async (url) => {
  const { data } = await axios.get(`${base_url}/${url}`, options);
  return data;
}