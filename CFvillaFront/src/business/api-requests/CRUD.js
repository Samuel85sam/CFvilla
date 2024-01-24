import React from 'react'
import axios from "axios";

const CRUD = {
    postForm:  async (data, route) => {    
        try {

            return  await axios.post(`http://localhost:3000/api/${route}`,data)

        } catch (err) {
            console.log('PostForm err ===> ',err.response);
            return err.response //!  ← ?? utile?
         }
    }
}

export default CRUD