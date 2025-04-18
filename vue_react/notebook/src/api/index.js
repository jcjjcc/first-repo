import axios from "@/utils/axios";

export const login = async (username, password) => await axios.post('/login',{
    username,
    password
})

export const uploadAvatar = async ()=>await axios.post('/upload')