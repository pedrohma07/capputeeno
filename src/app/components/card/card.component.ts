import { Component } from "@angular/core";
import { ProductService } from "src/app/services/product.service";


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  products = this.product.getProducts();

  constructor(
    private product: ProductService
  ) {}
}

