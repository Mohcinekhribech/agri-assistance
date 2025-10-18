import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { VarietesComponent } from './components/varietes/varietes.component';
import { FertilisantsComponent } from './components/fertilisants/fertilisants.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'varietes', component: VarietesComponent },
  { path: 'fertilisants', component: FertilisantsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
