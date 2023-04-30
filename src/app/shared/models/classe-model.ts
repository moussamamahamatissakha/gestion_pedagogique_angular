import { Module, Semestre } from "./schoolModel"

export interface Classe {
    id:number
    filiere:string
    niveau:string
    libelle:string
    selected:boolean
    etat:string
    coursClasses:any[]
   
}

export interface Niveau {
    id:number
    libelle:string
    etat:string
   
}

export interface Filiere {
    id:number
    libelle:string
    etat:string
   
}
export interface Cours {
    id:number
    nombreHeure:number
    etat:string
    module:Module
    idModule:number
    classe:Classe
    coursClasses:any[]
    semestre:Semestre
    idSemestre:number
}
export interface Session {
    id:number
    libelle:string
    etat:string
    heureDebut:string
    heureFin:string
    localisation:string
    date:Date
    cours:Cours
    nombreHeure:string
    idCours:number
}
export interface CoursClasse {
    id:number
    idModule:number
    idSemestre:number
    idProfesseur:number
    nombreHeure:string
    idClasses:number[]

}