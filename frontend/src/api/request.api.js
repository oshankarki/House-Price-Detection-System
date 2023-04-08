import http from 'api/http.api';

export const getUsers = () => {
    return http.get('/user');
}

export const deleteUser = (id) => {
    return http.delete(`/user/${id}`);
}

export const register = (data) => {
    return http.post(`/register`, data);
}

export const login = (credential) => {
    return http.post(`/login`, credential);
}
export const getWords = () => {
    return http.get(`/word`);
}
export const postWords = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    return http.post('/word', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}