import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: "No Human is Limed",description:'Eliud Kipchoge' },
    { id: 2, name: "Be a Voice not an Echo",description:'Nelson Mandela' },
    { id: 3, name: "Love For All, Hatred For None" ,description:'Romeo'},
    { id: 4, name: "Change the world by being yourself" ,description:'Malcom X'},
    { id: 5, name: "Every moment is a fresh beggining" ,description:'Angelina Davies'},
    { id: 6, name: "Aspire to inspire before you expire",description:'Thomas Michael' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
