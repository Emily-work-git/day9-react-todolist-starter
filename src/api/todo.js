import instance from "./interceptor";

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

