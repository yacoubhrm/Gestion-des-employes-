import { Component } from '@angular/core';

@Component({
  selector: 'app-creation-des-employes',
  templateUrl: './creation-des-employes.component.html',
  styleUrls: ['./creation-des-employes.component.scss']
})
export class CreationDesEmployesComponent {
  listeEmployees:any []=[];
  employe:any = {};
  nom!:string;
  prenom!:string;
  email!:string;
  materiel?:string;
  pc?:string;

  creeEmploye (){
    const nouveauemploye={
      nom:this.nom,
      prenom:this.prenom,
      email:this.email,
      materiel:this.materiel,
      pc:this.pc
    };
    this.listeEmployees.push(nouveauemploye);
    localStorage.setItem('listeEmployees',JSON.stringify(this.listeEmployees));

      this.nom='';
      this.prenom='';
      this.email='';
      this.materiel='';
      this.pc='';
    };

    ngOnInit(): void {
      const saveEEmployees= localStorage.getItem('listeEmployees');
      if (saveEEmployees){
        this.listeEmployees=JSON.parse(saveEEmployees);
      }
    }


supprimerEmploye(index:number){
  this.listeEmployees.splice(index, 1);
  localStorage.setItem('listeEmployees', JSON.stringify(this.listeEmployees));
}
modifierEmploye(index:number){

  const employeModifie ={
    nom:this.nom,
    prenom:this.prenom,
    email:this.email,
    materiel:this.materiel,
    pc:this.pc
  };
  this.listeEmployees[index]= employeModifie;
  localStorage.setItem('listeEmployees', JSON.stringify(this.listeEmployees));

  this.nom ='';
  this.prenom ='';
  this.email ='';

}

}
