import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";
@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "No Human is Limed", "Eliud Kipchoge",new Date(2019,12,1)),
    new Quote(2, "Be a Voice not an Echo", "Nelson Mandela",new Date(2019,12,1)),
    new Quote(3, "Love For All, Hatred For None", "Romeo",new Date(2019,12,1)),
    new Quote(4, "Change the world by being yourself", "Malcom X",new Date(2019,12,1)),
    new Quote(5, "Every moment is a fresh beggining", "Angelina Davies",new Date(2019,12,1)),
    new Quote(6, "Aspire to inspire before you expire", "Thomas Michael",new Date(2019,12,1))
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription
  }
  deleteQuote(isComplete, index){
    
    if (isComplete) {
      let toDelete = confirm( `Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() {}

  ngOnInit() {}
}
