import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceCardsComponent } from "../../price-cards/price-cards.component";

@Component({
    selector: 'app-prices-page',
    standalone: true,
    templateUrl: './prices-page.component.html',
    styleUrl: './prices-page.component.css',
    imports: [CommonModule, PriceCardsComponent]
})
export class PricesPageComponent {
  // Constructor
  constructor() {}
}
