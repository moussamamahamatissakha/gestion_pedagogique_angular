export interface Etudiant{
    id:number
    libelle:string
    login:string
    password:string
    nom_complet:string
    role:string
    image:string
    matricule:string
    idClasse:string
    inscriptions?:any[]
}


