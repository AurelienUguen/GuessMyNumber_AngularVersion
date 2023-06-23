import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guessmynumber-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // La fonction pour obtenir un nombre aléatoire est initialisé
  // au lancement du composant main;
  ngOnInit(): void {
    this.randomIntFromInterval(1, 20);
  }

  // Fonction pour retour un nombre aléatoire;
  randomIntFromInterval(min: number, max:number) {

    // Déclaration de la variable du nombre secret;
    let secretNumber = null;

    // Générer et stocker le nombre aléatoire dans la variable secretNumber;
    secretNumber = Math.floor(Math.random() * (max - min + 1) + min);

    // Ce console.log ne sert qu'à afficher le nombre dans l'inspecteur;
    console.log(secretNumber);

    // Retour de la variable secretNumber;
    return secretNumber;
  }

}
