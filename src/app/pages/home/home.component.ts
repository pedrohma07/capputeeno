import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  selectedTab: string = "todos";
  selectIsOpen: boolean = false;

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  setSelectIsOpen(): void {
    this.selectIsOpen = !this.selectIsOpen;
  }
  
}
