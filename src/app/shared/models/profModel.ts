import { Cours } from "./classe-model"

export interface Professeur {
    id:number
    grade:string
    nom:string
    specialite:string
    coursDTOList?:Cours[]
    
}
