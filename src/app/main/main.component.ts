import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

import { MessageDirective } from '../CustomDirectives/message.directive';

@Component({
  selector: 'guessmynumber-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  guessMessage: string = "Start Guessing...";
  revealSecretNumber: string | number = "?";

  randomMessageLowValue = ['Oops, you are too low!', 'Ouch, this value is low..', 'You should trying a higher number!'];
  randomMessageHighValue = ['Damn! You are too high..', 'Secret number is lower than this one.', 'You are high bro!'];

  constructor(private elementRef: ElementRef ,private renderer: Renderer2) {

  }

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

    const randomSentenceForLowValue = this.randomMessageLowValue[Math.floor(Math.random() * this.randomMessageLowValue.length)];
    const randomSentenceForHighValue = this.randomMessageHighValue[Math.floor(Math.random() * this.randomMessageHighValue.length)];

    let guess: number = f.value.checkNumber;

    if (guess === this.secretNumber) {
      this.revealSecretNumber = this.secretNumber;
      this.guessMessage = "Congrats, you guessed it !"
    } else if (guess < this.secretNumber) {
      this.guessMessage = randomSentenceForLowValue;
    } else {
      this.guessMessage = randomSentenceForHighValue
    }
  }

}
