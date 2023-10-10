import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  inputMobile = false;

  ngOnInit(): void {
    this.onResize(); // Chame a função onResize para definir o valor inicial de inputVisible
  }

  @HostListener("window:resize", ["$event"])
  onResize(): void {
    // Verifique o tamanho da tela e atualize a variável exibirElemento com base nisso
    this.inputMobile = window.innerWidth > 768; // Exiba o elemento apenas em telas com largura maior que 768 pixels
  }
}
