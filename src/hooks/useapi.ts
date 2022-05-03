import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const UseApi = () => ({
    validateToken: async  (email: string, password:string) => {
        return {
            user: {id: 3, name:'Jose', email: 'noki345@gmail.com'},
            
        }
        const response = await api.post('/validate');
        return response.data; 

    },
    signIn: async (email:string, password: string) => {
        return {
            user: {id: 3, name:'Jose', email: 'noki345@gmail.com'},
            token: '123456789'
        }
        const response = await api.post('/signIn' , {email, password});
        return response.data;
    },
    logOut: async () => {
            return {status: true}
        const response = await api.post('/logOut')
        return response.data
    }

});