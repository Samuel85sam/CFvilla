import axios from "axios";
import { useAuthStore } from "../../store-zustand/authStore";



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
        const response = await axios.post(`http://localhost:3000/api/${route}`, data);
        console.log('response CRUD.post ==>', response);


        if (response.status === 200) {
            return response
        }

    },

    getForm: async (route, params) => {

        const response = await axios.get(`http://localhost:3000/api/${route}`, { params });
        console.log('response CRUD.get ==>', response);
        if (response.status === 200) {
            return response.data
        }

    },

    patchFormById: async (route, data) => {
        try {
            const response = await axios.patch(`http://localhost:3000/api/${route}`, data)
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

        const response = await axios.delete(`http://localhost:3000/api/${route}`);
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