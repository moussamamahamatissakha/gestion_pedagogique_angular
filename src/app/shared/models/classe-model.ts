import { Professeur } from "./profModel"
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
    nombreHeuresGlobale:number
    nombreHeuresDeroule:number
    nombreHeuresRestant:number
    idModule:number
    idSemestre:number
    etat:string
    moduleDTO:Module
    NomProf:string
    date:Date
    semestre:Semestre
    classe:Classe
    coursClasses:any[]
    professeurDTO:Professeur 
    moduleLibelle:string
    //semestreDTO
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
    nombreHeure:number
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