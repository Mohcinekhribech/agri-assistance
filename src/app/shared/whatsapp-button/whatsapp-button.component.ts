import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {
  
  whatsappNumber = '+212528240500';
  defaultMessage = 'Bonjour, je souhaite obtenir des informations sur vos produits agricoles.';

  constructor() { }

  openWhatsApp(): void {
    const message = encodeURIComponent(this.defaultMessage);
    const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}
