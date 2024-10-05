import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-property-card',
  standalone: true,
  templateUrl: 'property-card.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: 'property-card.component.css'
})
export class PropertyCardComponent{
  Property: any = {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":1200
}
}
