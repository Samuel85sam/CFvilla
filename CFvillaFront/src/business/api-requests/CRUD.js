import axios from "axios";
import { useAuthStore } from "../../store-zustand/authStore";



//axios.defaults.withCredentials = false;

axios.interceptors.response.use(
    response => response,
    error => {
        const status = error.response ? error.response.status : null;

        if (status === 401) {
            console.log('Handle 401');
            useAuthStore.getState().logout();
            //console.log('authStore state ==> ', useAuthStore.getState());
        } else if (status === 404) {
            console.log('axios intercepted → Handle 404 ==> not found errors', error);
        } else {
            console.log('axios intercepted →  Handle other error',error);
        }
        
        return Promise.reject(error);
    }
    )
    

const CRUD = {



    postForm: async (route, data) => {
        console.log('data in CRUD.postform ==> ==> ', data);
        const response = await axios.post(`${import.meta.env.VITE_API_HOST}/${route}`, data);
        console.log('axios.post ; data =>',data);
        console.log('axios.post response =>', response);
        if (response.status === 200) {
            return response
        }

    },

    getForm: async (route, params) => {

        const response = await axios.get(`${import.meta.env.VITE_API_HOST}/${route}`, { params });
        console.log('axios.post ; json.str ({params}) => ',JSON.stringify({params}) );
        console.log('axios.post ; {params} => ',{params});
        console.log('axios.post ; params => ',params)
        console.log('axios.post response =>', response);
        if (response.status === 200) {
            return response.data
        }
    },

    patchFormById: async (route, data) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_API_HOST}/${route}`, data)
            console.log('response CRUD.patch ==>', response);
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
        };
        if (response === 401) {
            return response
        };

    },





}

export default CRUD