import axios from 'axios';

const baseURL = 'https://67495c7e868020296630aada.mockapi.io/api/v1';

const instance = axios.create({baseURL});

export const getTodos = async () => {
    try{
        const response = await instance.get("/todo");
        return response.data;
    }catch(error){
        console.error(error);
    }
}

export const addTodos = async (data) => {
    try{
        const response = await instance.post("/todo",data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}

export const deleteTodo = async (id) => {
    try{
        await instance.delete(`/todo/${id}`);
    }catch(error){
        console.error(error);
    }
}

export const updateTodo = async (id, data) => {
    try{
        const response = await instance.put(`/todo/${id}`,data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}

