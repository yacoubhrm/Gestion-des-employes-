import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {


  username!:String;
  password!:string;
  errorMessage!:string;

  constructor(private router:Router){}

  login(){
 if(this.username=="ROOT" && this.password=="root"){
      this.router.navigateByUrl("creer");

 }else{
  this.errorMessage="Nom d'utilisateur ou mots de passe est icorrect";


 }
  }
}
