import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'guessmynumber-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  secretNumber!: number;


  // La fonction pour obtenir un nombre aléatoire est initialisé
  // au lancement du component main;
  ngOnInit(): void {
    this.randomIntFromInterval(1, 20);
  }

  // Fonction pour retour un nombre aléatoire;
  randomIntFromInterval(min: number, max:number) {

    // Déclaration de la variable du nombre secret;
    let secretNumber: number;

    // Générer et stocker le nombre aléatoire dans la variable secretNumber;
    secretNumber = Math.floor(Math.random() * (max - min + 1) + min);

    // Ce console.log ne sert qu'à afficher le nombre dans l'inspecteur;
    console.log(secretNumber);

    // Retour de la variable secretNumber;
    return this.secretNumber = secretNumber;
  }

  onSubmit(f: NgForm) {

    const secretNumber: number = this.secretNumber;

    let guess: number = f.value.checkNumber;

    if (guess === this.secretNumber) {
      alert('You Guessed It!');
    } else if (guess < this.secretNumber){
      alert('Oops.. You are too low!');
    } else {
      alert('Damn! You are too high!');
    }
  }

}
