import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-1ca31.firebaseio.com/'
});

export default instance;