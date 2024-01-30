import axios from "axios";
//import { useAuthStore } from "../../store-zustand/authStore";


export const setUserJwt = (jwt) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}


const CRUD = {


    postForm: async (route, data) => {
        console.log('data in CRUD.postform ==> ==> ', data);

        const response = await axios.post(`http://localhost:3000/api/${route}`, data);

        if (response.status === 200) {
            return response
        }

    },

    getForm: async (route, params) => {

        const response = await axios.get(`http://localhost:3000/api/${route}`, { params })
        // console.log('resonse in CRUD ==>', response);
        if (response.status === 200) {
            return response.data
        }

    },

    patchForm: async (data, route) => {
        try {
            const response = await axios.patch(`http://localhost:3000/api/${route}`, data)
            if (response === 200) {
                return response
            } else {
                return response.status
            }
        } catch (error) {
            console.log('patchForm err ===> ', err.response);
            return err.response //!  ← ?? utile?
        }
    },

    deleteForm: async (route, data) => {
        console.log('route & data  CRUD.delete ==>',route ,' &',' ', data );
        const response = await axios.delete(`http://localhost:3000/api/${route}`, data)
        console.log('response CRUD.delete ==>',response);
        if (response === 200) {
            return response
        }

    },





}

export default CRUD