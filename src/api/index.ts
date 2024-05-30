import axios from 'axios';
import courses from './courses'

const instance = axios.create({
    // @ts-ignore
    baseURL: 'https://logiclike.com/docs',
    // headers: {
    //   Authorization: `Bearer ${getCookie('access_token')}`
    // }
})
//@ts-ignore
console.log(process.env.REACT_APP_SERVER_API, window.REACT_APP_SERVER_API);




const api = {
    ...courses
}

export { instance, api };

