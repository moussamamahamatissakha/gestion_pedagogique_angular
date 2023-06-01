
import { Cours } from "./classe-model"

export interface Professeur {
    id:number
    grade:string
    nom:string
    specialite:string
    login:string
    password:string
    photo:string
    coursDTOList?:Cours[]
    
}
