export interface AppUser {
    id:number
    username:string
    password:string
    photo:string
    roles:string[]
}
export interface UserForm {
    login:string
    password:string
}
export interface RP extends AppUser{
    specialite:string
}
