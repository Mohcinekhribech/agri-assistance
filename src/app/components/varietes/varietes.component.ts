import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Variete, VarieteFilter } from '../../models/variete.model';

@Component({
  selector: 'app-varietes',
  templateUrl: './varietes.component.html',
  styleUrls: ['./varietes.component.css']
})
export class VarietesComponent implements OnInit {
  
  varietes: Variete[] = [];
  filteredVarietes: Variete[] = [];
  types: string[] = [];
  selectedVariete: Variete | null = null;
  
  filters: VarieteFilter = {
    type: '',
    searchTerm: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadVarietes();
    this.loadTypes();
  }

  loadVarietes(): void {
    this.varietes = this.dataService.getVarietes();
    this.filteredVarietes = [...this.varietes];
  }

  loadTypes(): void {
    this.types = this.dataService.getTypesVarietes();
  }

  applyFilters(): void {
    this.filteredVarietes = this.dataService.getVarietes(this.filters);
  }

  clearFilters(): void {
    this.filters = {
      type: '',
      searchTerm: ''
    };
    this.applyFilters();
  }

  selectVariete(variete: Variete): void {
    this.selectedVariete = variete;
  }

  closeModal(): void {
    this.selectedVariete = null;
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onFilterChange(): void {
    this.applyFilters();
  }
}
