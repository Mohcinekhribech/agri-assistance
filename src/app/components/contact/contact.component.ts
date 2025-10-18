import { Component } from '@angular/core';
import { ContactForm } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  formData: ContactForm = {
    nom: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;

  constructor() { }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.isSubmitting = true;
      
      // Simulation d'envoi
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.resetForm();
      }, 2000);
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.nom &&
      this.formData.email &&
      this.formData.message
    );
  }

  resetForm(): void {
    this.formData = {
      nom: '',
      email: '',
      message: ''
    };
  }

  closeSuccessMessage(): void {
    this.isSubmitted = false;
  }
}
