import { Component } from '@angular/core';
import { TeamMember } from '../../models/contact.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  values = [
    {
      title: 'Innovation',
      description: 'Nous développons constamment de nouvelles variétés et solutions pour répondre aux défis agricoles modernes.',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'Notre engagement envers la qualité garantit des produits et services de la plus haute qualité.',
      icon: '⭐'
    },
    {
      title: 'Durabilité',
      description: 'Nous privilégions des pratiques agricoles durables pour préserver l\'environnement et les générations futures.',
      icon: '🌱'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      nom: 'Dr. Ahmed Benali',
      poste: 'Directeur Technique',
      description: 'Expert en développement variétal avec plus de 15 ans d\'expérience'
    },
    {
      nom: 'Ing. Fatima Zahra',
      poste: 'Responsable Fertilisants',
      description: 'Spécialiste en nutrition végétale et solutions fertilisantes'
    },
    {
      nom: 'Dr. Youssef Alami',
      poste: 'Conseiller Agricole',
      description: 'Conseiller technique spécialisé en agriculture intensive'
    }
  ];

  constructor() { }
}
