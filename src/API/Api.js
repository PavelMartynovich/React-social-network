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
       
    },
    getProfile(userId){
        console.warn('Outdate tec is using! Use profileAPI!')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    
    getProfile(userId){
        
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put('profile/status', {status:status})
    },
}

export const authAPI={
    me() {
        return instance.get(`auth/me`)
    }
}
