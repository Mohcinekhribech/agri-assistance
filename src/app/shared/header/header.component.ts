import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  isMenuOpen = false;
  isTransparent = false;
  isHomePage = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Écouter les changements de route
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage = event.url === '/' || event.url === '';
        this.updateTransparency();
      });

    // Vérifier la route initiale
    this.isHomePage = this.router.url === '/' || this.router.url === '';
    this.updateTransparency();
  }

  ngOnDestroy(): void {
    // Nettoyage si nécessaire
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.updateTransparency();
  }

  private updateTransparency(): void {
    if (this.isHomePage) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isTransparent = scrollTop <= 100; // Transparent si on est en haut de la page
      console.log('Home page - Scroll:', scrollTop, 'Transparent:', this.isTransparent);
    } else {
      this.isTransparent = false; // Toujours opaque sur les autres pages
      console.log('Other page - Transparent:', this.isTransparent);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
