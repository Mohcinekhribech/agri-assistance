import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Fertilisant, FertilisantFilter } from '../../models/fertilisant.model';

@Component({
  selector: 'app-fertilisants',
  templateUrl: './fertilisants.component.html',
  styleUrls: ['./fertilisants.component.css']
})
export class FertilisantsComponent implements OnInit {
  
  fertilisants: Fertilisant[] = [];
  filteredFertilisants: Fertilisant[] = [];
  selectedFertilisant: Fertilisant | null = null;
  
  filters: FertilisantFilter = {
    searchTerm: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadFertilisants();
  }

  loadFertilisants(): void {
    this.fertilisants = this.dataService.getFertilisants();
    this.filteredFertilisants = [...this.fertilisants];
  }

  applyFilters(): void {
    this.filteredFertilisants = this.dataService.getFertilisants(this.filters);
  }

  clearFilters(): void {
    this.filters = {
      searchTerm: ''
    };
    this.applyFilters();
  }

  selectFertilisant(fertilisant: Fertilisant): void {
    this.selectedFertilisant = fertilisant;
  }

  closeModal(): void {
    this.selectedFertilisant = null;
  }

  onSearchChange(): void {
    this.applyFilters();
  }
}
