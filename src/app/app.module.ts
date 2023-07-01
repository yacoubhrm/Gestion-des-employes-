import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GestionDesEmployesComponent } from './gestion-des-employes/gestion-des-employes.component';
import { CreationDesEmployesComponent } from './creation-des-employes/creation-des-employes.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GestionDesEmployesComponent,
    CreationDesEmployesComponent,
    ConnexionComponent,
    MenuComponent
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
