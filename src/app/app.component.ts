import { Component } from "@angular/core";
import { Quote } from "./quote";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  quotes: Quote[] = [
    { id: 1, name: "No Human is Limed" },
    { id: 2, name: "Be a Voice not an Echo" },
    { id: 3, name: "Love For All, Hatred For None" },
    { id: 4, name: "Change the world by being yourself" },
    { id: 5, name: "Every moment is a fresh beggining" },
    { id: 6, name: "Aspire to inspire before you expire" }
  ];

  constructor() {}
}
