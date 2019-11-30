import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";
@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "No Human is Limed", "Eliud Kipchoge"),
    new Quote(2, "Be a Voice not an Echo", "Nelson Mandela"),
    new Quote(3, "Love For All, Hatred For None", "Romeo"),
    new Quote(4, "Change the world by being yourself", "Malcom X"),
    new Quote(5, "Every moment is a fresh beggining", "Angelina Davies"),
    new Quote(6, "Aspire to inspire before you expire", "Thomas Michael")
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit() {}
}
