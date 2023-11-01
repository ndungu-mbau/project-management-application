export interface User{
    fullName: string,
    email: string,
    password: string,
    role: string
}

export interface UserLogin { 
    email:string,
    password: string
}