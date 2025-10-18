import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  services = [
    {
      title: 'Assistance Technique',
      description: 'Nos experts vous accompagnent dans l\'optimisation de vos cultures avec des conseils personnalisés et des solutions adaptées à vos besoins spécifiques.',
      icon: '🔬',
      features: [
        'Diagnostic des problèmes de culture',
        'Conseils en nutrition végétale',
        'Optimisation des rendements',
        'Formation technique'
      ]
    },
    {
      title: 'Développement Variétal',
      description: 'Nous développons constamment de nouvelles variétés adaptées aux conditions climatiques marocaines pour maximiser vos rendements.',
      icon: '🧬',
      features: [
        'Recherche et développement',
        'Tests de nouvelles variétés',
        'Adaptation aux conditions locales',
        'Amélioration génétique'
      ]
    },
    {
      title: 'Vente de Semences',
      description: 'Gamme complète de semences F1 de haute qualité, sélectionnées pour leurs performances exceptionnelles et leur résistance aux maladies.',
      icon: '🌱',
      features: [
        'Semences F1 certifiées',
        'Variétés résistantes',
        'Haute productivité',
        'Qualité garantie'
      ]
    },
    {
      title: 'Vente de Fertilisants',
      description: 'Solutions nutritionnelles spécialisées pour optimiser la croissance de vos cultures et améliorer la qualité de vos productions.',
      icon: '🌿',
      features: [
        'Fertilisants organiques',
        'Micro-éléments',
        'Biostimulants',
        'Solutions personnalisées'
      ]
    }
  ];

  constructor() { }
}
