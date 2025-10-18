export interface Fertilisant {
  id: string;
  nom: string;
  composition: string;
  caracteristiques: string;
  dose: string;
  imageUrl?: string;
  description?: string;
}

export interface FertilisantFilter {
  searchTerm?: string;
}
