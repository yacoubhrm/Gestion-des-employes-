import { NgModule, createComponent } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import { CreationDesEmployesComponent } from "./creation-des-employes/creation-des-employes.component";
import {  GestionDesEmployesComponent } from "./gestion-des-employes/gestion-des-employes.component";


const routes: Routes =[
  {path:'', component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'creer', component:CreationDesEmployesComponent},
  {path:'gestion',component: GestionDesEmployesComponent}

];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{


}
