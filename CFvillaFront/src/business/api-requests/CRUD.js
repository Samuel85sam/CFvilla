import axios from "axios";

const CRUD = {
    postForm: async (data, route) => {
        try {
            const response = await axios.post(`http://localhost:3000/api/${route}`, data);
            if (response.status === 200) {
                return response
            }
        } catch (error) {
            console.log('postForm err ===> ', err.response);
            return err.response //!  ← ?? utile?
        }
    },

    getForm: async (route,data) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/${route}`,data)
            console.log('resonse in CRUD ==>', response);
            if (response.status === 200) {
                return response.data
            }
        } catch (err) {
            console.log('getForm err ===> ', err.response);
            return err.response //!  ← ?? utile?
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

    deleteForm: async (data, route) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/${route}`, data)
            if (response === 200) {
                return response
            }
        } catch (error) {
            console.log('deleteForm err ===> ', err.response);
            return err.response //!  ← ?? utile?
        }
    },





}

export default CRUD