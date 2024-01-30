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

    patchFormById: async (route,data) => {
        try {
            const response = await axios.patch(`http://localhost:3000/api/${route}`, data)
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
        console.log('route   CRUD.delete ==>',route  );
        const response = await axios.delete(`http://localhost:3000/api/${route}`)
        console.log('response CRUD.delete ==>',response);
        if (response === 200) {
            return response
        }

    },





}

export default CRUD