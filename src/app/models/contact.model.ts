export interface ContactForm {
  nom: string;
  email: string;
  message: string;
}

export interface TeamMember {
  nom: string;
  poste: string;
  imageUrl?: string;
  description?: string;
}
