export interface Variete {
  id: string;
  nom: string;
  type: string;
  description: string;
  caracteristiques: string[];
  resistances: string[];
  imageUrl?: string;
  details?: string;
}

export interface VarieteFilter {
  type?: string;
  searchTerm?: string;
}
