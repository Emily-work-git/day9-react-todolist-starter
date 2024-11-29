import axios from 'axios';

const baseURL = 'https://67495c7e868020296630aada.mockapi.io/api/v1';

const instance = axios.create({baseURL, timeout: 1000});

export const getTodos = async () => {
    try{
        const response = await instance.get("/TodoItem");
        return response.data;
    }catch(error){
        console.error(error);
    }
}


