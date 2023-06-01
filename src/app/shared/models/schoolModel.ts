import { Cours } from "./classe-model"

export interface AnneeScolaire {
    id:number
    libelle:string
    semestres:Semestre[]
    dateDebut :string;
    dateFin :string;
}
export interface Semestre {
    id:number
    numero:string
    //idAnnee:number
    anneeScolaire:AnneeScolaire 
}

export interface Salle {
    id:number
    nom:string
    numero:number
    nombrePlaces:number
}
export interface Module {
    id:number
    libelle:string
    etat:string
    cours?:Cours[] 
}



