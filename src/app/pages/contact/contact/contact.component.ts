import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  cardsContainer: HTMLElement | null = null;
  card1: HTMLElement | null = null;
  card2: HTMLElement | null = null;
  card3: HTMLElement | null = null;
  isCard1Open = false;
  isCard2Open = false;
  isCard3Open = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.cardsContainer = this.elementRef.nativeElement.querySelector('#card-container');
    this.card1 = this.elementRef.nativeElement.querySelector('#card1');
    this.card2 = this.elementRef.nativeElement.querySelector('#card2');
    this.card3 = this.elementRef.nativeElement.querySelector('#card3');
  }

  toggleCardOpen(card: string) {
    switch (card) {
      case 'card1':
        this.isCard1Open = !this.isCard1Open;
        this.checkFirstCard();
        break;
      case 'card2':
        this.isCard2Open = !this.isCard2Open;
        this.checkSecondCard();
        break;
      case 'card3':
        this.isCard3Open = !this.isCard3Open;
        this.checkThirdCard();
        break;
      default:
        break;
    }
  }

  checkFirstCard() {
    if (this.isCard1Open && this.card1 && this.cardsContainer && this.card2 && this.card3) {
      this.card1.classList.add('flip');
      this.cardsContainer.classList.add('flip');
      this.card2.style.opacity = '0';
      this.card3.style.opacity = '0';
    } else if(this.card1 && this.cardsContainer && this.card2 && this.card3)
    {
      this.card1.classList.remove('flip');
      this.cardsContainer.classList.remove('flip');
      this.card2.style.opacity = '1';
      this.card3.style.opacity = '1';
    }
  }

  checkSecondCard() {
    if (this.isCard2Open && this.card1 && this.cardsContainer && this.card2 && this.card3) {
      this.card2.classList.add('flip');
      this.cardsContainer.classList.add('flip');
      this.card1.style.opacity = '0';
      this.card3.style.opacity = '0';
    } else if(this.card1 && this.cardsContainer && this.card2 && this.card3)
    {
      this.card2.classList.remove('flip');
      this.cardsContainer.classList.remove('flip');
      this.card1.style.opacity = '1';
      this.card3.style.opacity = '1';
    }
  }

  checkThirdCard() {
    if (this.isCard3Open && this.card1 && this.cardsContainer && this.card2 && this.card3) {
      this.card3.classList.add('flip');
      this.cardsContainer.classList.add('flip');
      this.card1.style.opacity = '0';
      this.card2.style.opacity = '0';
    } else if(this.card1 && this.cardsContainer && this.card2 && this.card3)
    {
      this.card3.classList.remove('flip');
      this.cardsContainer.classList.remove('flip');
      this.card1.style.opacity = '1';
      this.card2.style.opacity = '1';
    }
  }
}
