import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-1d7a0.firebaseio.com/'
});

export default instance;