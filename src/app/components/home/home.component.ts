import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Variete } from '../../models/variete.model';
import { Fertilisant } from '../../models/fertilisant.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services = [
    {
      title: 'Nos Variétés',
      description: 'Découvrez notre gamme complète de semences F1 de haute qualité',
      icon: '🌱',
      route: '/varietes',
      color: 'primary'
    },
    {
      title: 'Nos Fertilisants',
      description: 'Solutions nutritionnelles pour optimiser vos cultures',
      icon: '🌿',
      route: '/fertilisants',
      color: 'secondary'
    },
    {
      title: 'Assistance Technique',
      description: 'Conseils d\'experts pour vos défis agricoles',
      icon: '🔬',
      route: '/services',
      color: 'primary'
    },
    {
      title: 'Contactez-nous',
      description: 'Une équipe à votre service pour vous accompagner',
      icon: '📞',
      route: '/contact',
      color: 'secondary'
    }
  ];

  varietes: Variete[] = [];
  fertilisants: Fertilisant[] = [];
  
  currentVarieteIndex = 0;
  currentFertilisantIndex = 0;

  // Touch support properties
  private touchStartX = 0;
  private touchStartY = 0;
  private touchEndX = 0;
  private touchEndY = 0;
  private minSwipeDistance = 50;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.varietes = this.dataService.getVarietes().slice(0, 6); // Afficher seulement les 6 premières
    this.fertilisants = this.dataService.getFertilisants().slice(0, 6); // Afficher seulement les 6 premiers
  }

  navigateToService(route: string): void {
    this.router.navigate([route]);
  }

  // Variétés slider methods
  nextVariete(): void {
    this.currentVarieteIndex = (this.currentVarieteIndex + 1) % this.varietes.length;
  }

  previousVariete(): void {
    this.currentVarieteIndex = this.currentVarieteIndex === 0 ? this.varietes.length - 1 : this.currentVarieteIndex - 1;
  }

  goToVariete(index: number): void {
    this.currentVarieteIndex = index;
  }

  // Fertilisants slider methods
  nextFertilisant(): void {
    this.currentFertilisantIndex = (this.currentFertilisantIndex + 1) % this.fertilisants.length;
  }

  previousFertilisant(): void {
    this.currentFertilisantIndex = this.currentFertilisantIndex === 0 ? this.fertilisants.length - 1 : this.currentFertilisantIndex - 1;
  }

  goToFertilisant(index: number): void {
    this.currentFertilisantIndex = index;
  }

  // Touch support methods
  onTouchStart(event: TouchEvent, sliderType: 'variete' | 'fertilisant'): void {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchMove(event: TouchEvent, sliderType: 'variete' | 'fertilisant'): void {
    // Prevent default scrolling behavior during horizontal swipes
    if (Math.abs(event.touches[0].clientX - this.touchStartX) > Math.abs(event.touches[0].clientY - this.touchStartY)) {
      event.preventDefault();
    }
  }

  onTouchEnd(event: TouchEvent, sliderType: 'variete' | 'fertilisant'): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.touchEndY = event.changedTouches[0].clientY;
    
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    
    // Check if it's a horizontal swipe (not vertical scroll)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > this.minSwipeDistance) {
      if (sliderType === 'variete') {
        if (deltaX > 0) {
          this.previousVariete();
        } else {
          this.nextVariete();
        }
      } else if (sliderType === 'fertilisant') {
        if (deltaX > 0) {
          this.previousFertilisant();
        } else {
          this.nextFertilisant();
        }
      }
    }
  }
}
