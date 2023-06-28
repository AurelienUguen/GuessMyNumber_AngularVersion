import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Form, NgForm } from '@angular/forms';

import { MessageDirective } from '../CustomDirectives/message.directive';

@Component({
  selector: 'guessmynumber-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // Gestionnaire de variable
  guessMessage: string = "Start Guessing...";
  secretNumber!: number;
  revealSecretNumber: string | number = "?";
  score: number = 20;
  highscore: number = 0;
  isGameFinished: boolean = false;
  randomMessageLowValue = ['Oops, you are too low!', 'Ouch, this value is low..', 'You should trying a higher number!'];
  randomMessageHighValue = ['Damn! You are too high..', 'Secret number is lower than this one.', 'You are high bro!'];

  constructor(private elementRef: ElementRef ,private renderer: Renderer2) {

  }

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

  compareGuessAndSecretNumber(f: NgForm) {

    // Affichage aléatoire des retours message
    const randomSentenceForLowValue = this.randomMessageLowValue[Math.floor(Math.random() * this.randomMessageLowValue.length)];
    const randomSentenceForHighValue = this.randomMessageHighValue[Math.floor(Math.random() * this.randomMessageHighValue.length)];

    // On stock la valeur du nombre dans l'input dans la variable Guess
    let guess: number = f.value.checkNumber;

    // Ici on compare les deux valeurs
    if(guess === this.secretNumber) {
      this.revealSecretNumber = this.secretNumber;
      this.guessMessage = "Congratulations! You guessed it.";
      this.isGameFinished = true;
      if(this.score > this.highscore) {
        this.highscore = this.score;
      }
    } else if(guess < this.secretNumber) {
      this.guessMessage = randomSentenceForLowValue;
    } else {
      this.guessMessage = randomSentenceForHighValue
    }
  }

  updateScore(f: NgForm) {

    let guess: number = f.value.checkNumber;

    if(guess !== this.secretNumber) {
      this.score -= 1;
      if(this.score === 0) {
        this.revealSecretNumber = this.secretNumber;
        this.guessMessage = "You Lose... Try again!";
        this.isGameFinished = true;
      }
    }
  }


  onSubmit(f: NgForm) {

    // Condition permettant d'arrêter le jeusi victoire ou défaite
    if(this.isGameFinished) return;

    // Comparaison de la valeur entrée avec le nombre secret
    this.compareGuessAndSecretNumber(f);

    // Gestion de l'affiche du score avec condition de défaite.
    this.updateScore(f);
  }

}
