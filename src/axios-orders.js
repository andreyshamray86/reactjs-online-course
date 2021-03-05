import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-c3af3-default-rtdb.firebaseio.com/'
});

export default instance;