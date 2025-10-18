import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { VarietesComponent } from './components/varietes/varietes.component';
import { FertilisantsComponent } from './components/fertilisants/fertilisants.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatsappButtonComponent } from './shared/whatsapp-button/whatsapp-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    VarietesComponent,
    FertilisantsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
