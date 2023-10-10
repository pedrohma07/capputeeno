import { Component } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  name: string = "Caneca de cerâmica rústica";
  price: string = "40.0";
  image: string = "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg";
}

