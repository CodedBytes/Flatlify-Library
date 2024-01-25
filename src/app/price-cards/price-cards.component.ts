import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Card Object
class Card {
  plan_name:string;
  price:string;
  descriptions:string[];
  tag:string;

  // Building the cards structure
  constructor(_plan_name:string, _price:string, _desc:string[],  _tag:string) {
    this.plan_name = _plan_name;
    this.price = _price;
    this.descriptions = _desc;
    this.tag = _tag;
  }
}

@Component({
  selector: 'app-price-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-cards.component.html',
  styleUrl: './price-cards.component.css'
})

export class PriceCardsComponent {
  // Constructor
  constructor(){}

  // Initial instantiation
  descs: string[] = [
    "Access to version 1.0.",
    "Don't need to pay extra fees.",
    "Private Repository Access.",
    "Cancel it whenever you desire.",
    "Receives live updates."
  ];
  plan_names: string[] = ['Iron Square Plan','Iron Square Plan','Iron Square Plan'];
  plan_prices: string[] = ['R$ 20,00', 'R$ 40,00', 'R$ 60,00'];

  // Cards
  cards: Card[] = [
    new Card('Iron Square Plan', 'FREE', ["Access to version 1.0.", "Don't need to pay extra fees."], ''),
    new Card('Golden Square Plan', 'R$ 20,00', ["Access to version 2.0.", "Don't need to pay extra fees.", "Private Repository Access.", "Cancel it whenever you desire."], 'New'),
    new Card('Diamond Square Plan', 'R$ 40,00', ["Access to version 2.0.", "Don't need to pay extra fees.", "Private Repository Access.", "Cancel it whenever you desire.","Receives live updates on discord."], 'New')
  ]
}
