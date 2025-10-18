import { Injectable } from '@angular/core';
import { Variete, VarieteFilter } from '../models/variete.model';
import { Fertilisant, FertilisantFilter } from '../models/fertilisant.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private varietes: Variete[] = [
    {
      id: '1',
      nom: 'Tawnza F1',
      type: 'Tomate',
      description: 'Tomate industrielle, 120–140 g, bonne conservation',
      caracteristiques: ['120–140 g', 'Bonne conservation', 'Industrielle'],
      resistances: ['Pst', 'ToMV', 'Va', 'TyLcv']
    },
    {
      id: '2',
      nom: 'Al Baraka F1',
      type: 'Poivron',
      description: 'Poivron, 18–20 cm, vert foncé',
      caracteristiques: ['18–20 cm', 'Vert foncé'],
      resistances: ['HR Tm(0–2) L3', 'IR TSWV']
    },
    {
      id: '3',
      nom: 'Dounia F1',
      type: 'Piment',
      description: 'Piment très productif, 16–18 cm',
      caracteristiques: ['Très productive', '16–18 cm'],
      resistances: ['IR oïdium']
    },
    {
      id: '4',
      nom: 'Atlas F1',
      type: 'Poivron Kapya',
      description: 'Poivron Kapya, couleur rouge brillante',
      caracteristiques: ['Couleur rouge brillante'],
      resistances: []
    },
    {
      id: '5',
      nom: 'Rafik F1',
      type: 'Melon',
      description: 'Melon jaune doré, 4 kg, excellente conservation',
      caracteristiques: ['4 kg', 'Jaune doré', 'Excellente conservation'],
      resistances: []
    },
    {
      id: '6',
      nom: 'Tissir F1',
      type: 'Melon',
      description: 'Melon, 2–3 kg, Brix 14–15',
      caracteristiques: ['2–3 kg', 'Brix 14–15'],
      resistances: []
    },
    {
      id: '7',
      nom: 'Adrar F1',
      type: 'Pastèque',
      description: 'Pastèque, 14–16 kg, forte conservation',
      caracteristiques: ['14–16 kg', 'Forte conservation'],
      resistances: []
    },
    {
      id: '8',
      nom: 'Sabrina F1',
      type: 'Haricot',
      description: 'Haricot plat, vert foncé, excellente résistance',
      caracteristiques: ['Plat', 'Vert foncé', 'Excellente résistance'],
      resistances: []
    },
    {
      id: '9',
      nom: 'Dakhla F1',
      type: 'Melon Piel de Sapo',
      description: 'Piel de Sapo, Brix 14–15, chair blanche croquante',
      caracteristiques: ['Brix 14–15', 'Chair blanche croquante'],
      resistances: []
    },
    {
      id: '10',
      nom: '257 F1',
      type: 'Courgette',
      description: 'Courgette, 18–20 cm, précoce',
      caracteristiques: ['18–20 cm', 'Précoce'],
      resistances: []
    },
    {
      id: '11',
      nom: '5055 F1',
      type: 'Aubergine',
      description: 'Aubergine, 18–20 cm, résistante au stress',
      caracteristiques: ['18–20 cm', 'Résistante au stress'],
      resistances: []
    },
    {
      id: '12',
      nom: 'Chtouka F1',
      type: 'Concombre',
      description: 'Concombre, 20–22 cm, excellente conservation',
      caracteristiques: ['20–22 cm', 'Excellente conservation'],
      resistances: []
    }
  ];

  private fertilisants: Fertilisant[] = [
    {
      id: '1',
      nom: 'FICO HUMUS',
      composition: '28% matière organique, 2.2% N total',
      caracteristiques: 'Amélioration de la structure du sol',
      dose: '500-1000 kg/ha'
    },
    {
      id: '2',
      nom: 'FICO GROW',
      composition: 'Acides aminés, stimule la croissance',
      caracteristiques: 'Stimulation de la croissance végétale',
      dose: '2-3 L/ha'
    },
    {
      id: '3',
      nom: 'FICO GROSS',
      composition: 'Augmente la nouaison et taille des fruits',
      caracteristiques: 'Amélioration de la fructification',
      dose: '1-2 L/ha'
    },
    {
      id: '4',
      nom: 'FICO FOSFORICO',
      composition: 'Oléate phosphorique, mouillant/acide',
      caracteristiques: 'Correction des carences en phosphore',
      dose: '2-4 L/ha'
    },
    {
      id: '5',
      nom: 'FICO CAL',
      composition: 'Correcteur de calcium',
      caracteristiques: 'Prévention des carences en calcium',
      dose: '3-5 L/ha'
    },
    {
      id: '6',
      nom: 'FICO CU-5',
      composition: 'Correcteur de cuivre',
      caracteristiques: 'Traitement des carences en cuivre',
      dose: '1-2 L/ha'
    },
    {
      id: '7',
      nom: 'FICO MOLBOR',
      composition: 'Bore et molybdène',
      caracteristiques: 'Nutrition en micro-éléments',
      dose: '1-2 L/ha'
    },
    {
      id: '8',
      nom: 'FICO AMIN 24',
      composition: 'Acides aminés liquides',
      caracteristiques: 'Stimulation et nutrition',
      dose: '2-3 L/ha'
    },
    {
      id: '9',
      nom: 'MEGA POTASSE',
      composition: 'Potasse liquide 20% K₂O',
      caracteristiques: 'Nutrition potassique',
      dose: '3-5 L/ha'
    },
    {
      id: '10',
      nom: 'FICO SOL MIX',
      composition: 'Mélange micro-éléments',
      caracteristiques: 'Nutrition complète en micro-éléments',
      dose: '2-4 L/ha'
    },
    {
      id: '11',
      nom: 'FICONITA',
      composition: 'Développement foliaire',
      caracteristiques: 'Amélioration du développement foliaire',
      dose: '1-2 L/ha'
    },
    {
      id: '12',
      nom: 'FICOROOT',
      composition: 'Biostimulant racinaire',
      caracteristiques: 'Stimulation du système racinaire',
      dose: '2-3 L/ha'
    },
    {
      id: '13',
      nom: 'AGRO LIQUI BORE',
      composition: 'Correcteur bore',
      caracteristiques: 'Traitement des carences en bore',
      dose: '1-2 L/ha'
    },
    {
      id: '14',
      nom: 'AGRI PEROX 48',
      composition: 'Désinfectant agricole',
      caracteristiques: 'Désinfection et protection',
      dose: '2-4 L/ha'
    },
    {
      id: '15',
      nom: 'ONUR Cu %10',
      composition: 'Correcteur cuivre',
      caracteristiques: 'Traitement des carences en cuivre',
      dose: '1-2 L/ha'
    },
    {
      id: '16',
      nom: 'FOSCA',
      composition: 'Correcteur phosphore + calcium',
      caracteristiques: 'Nutrition phospho-calcique',
      dose: '3-5 L/ha'
    },
    {
      id: '17',
      nom: 'MOLIBDATE B',
      composition: 'Correcteur molybdène & bore',
      caracteristiques: 'Nutrition en micro-éléments',
      dose: '1-2 L/ha'
    }
  ];

  getVarietes(filter?: VarieteFilter): Variete[] {
    let filteredVarietes = [...this.varietes];

    if (filter) {
      if (filter.type) {
        filteredVarietes = filteredVarietes.filter(v => v.type === filter.type);
      }

      if (filter.searchTerm) {
        const term = filter.searchTerm.toLowerCase();
        filteredVarietes = filteredVarietes.filter(v => 
          v.nom.toLowerCase().includes(term) ||
          v.type.toLowerCase().includes(term) ||
          v.description.toLowerCase().includes(term)
        );
      }
    }

    return filteredVarietes;
  }

  getVarieteById(id: string): Variete | undefined {
    return this.varietes.find(v => v.id === id);
  }

  getFertilisants(filter?: FertilisantFilter): Fertilisant[] {
    let filteredFertilisants = [...this.fertilisants];

    if (filter && filter.searchTerm) {
      const term = filter.searchTerm.toLowerCase();
      filteredFertilisants = filteredFertilisants.filter(f => 
        f.nom.toLowerCase().includes(term) ||
        f.composition.toLowerCase().includes(term) ||
        f.caracteristiques.toLowerCase().includes(term)
      );
    }

    return filteredFertilisants;
  }

  getFertilisantById(id: string): Fertilisant | undefined {
    return this.fertilisants.find(f => f.id === id);
  }

  getTypesVarietes(): string[] {
    return [...new Set(this.varietes.map(v => v.type))];
  }
}
