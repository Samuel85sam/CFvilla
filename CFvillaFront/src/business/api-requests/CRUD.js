import axios from "axios";



//axios.defaults.withCredentials = false;

/* axios.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;

        if (status === 401) {
            console.log('Handle 401');
        } else if (status === 404) {
            console.log('axios intercepted → Handle 404 ==> not found errors', error);
        } else {
            console.log('axios intercepted →  Handle other error',error);
        }
        
        return Promise.reject(error);
    }
    )
     */

const CRUD = {



    postForm: async (route, data, headers) => {
        const response = await axios.post(`${import.meta.env.VITE_API_HOST}/${route}`, data, headers);
       
        if (response.status === 200) {
            console.log('reponse axios.post => ', response);
            return response
        }

    },

    getForm: async (route, params) => {

        const response = await axios.get(`${import.meta.env.VITE_API_HOST}/${route}`, { params });
      
        if (response.status === 200) {
            return response.data
        }
    },

    patchFormById: async (route, data) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_API_HOST}/${route}`, data)
            if (response === 200) {
                return response
            } else {
                return response.status
            }
        } catch (err) {
            console.log('patchForm err ===> ', err.response);
            return err.response //!  ← ?? utile?
        }
    },

    deleteFormById: async (route) => {

        const response = await axios.delete(`${import.meta.env.VITE_API_HOST}/${route}`);
        console.log('response CRUD.delete ==>', response);
        if (response === 200) {
            return response
        }
        if (response === 401) {
            return response
        }

    },





}

export default CRUD