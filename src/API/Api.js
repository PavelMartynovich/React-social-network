import axios from "axios";
import { toggleFollowingInProgressAC } from "../data/users-reduser";

const instance = axios.create(
    
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: { "API-KEY": "03755a9c-01a0-41bd-980a-d1818db41aee" }
    }
)





export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 25) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
            .then(response => {
                return response.data
            })
    },
    postUsers(userId) {
        
        return instance.post(`follow/${userId}`)
       
    },
    deleteUsers(userId) {
      
        return instance.delete(`follow/${userId}`)
       
    }
}


