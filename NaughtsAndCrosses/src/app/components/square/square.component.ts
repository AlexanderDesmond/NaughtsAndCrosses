import { Component, Input } from "@angular/core";

@Component({
  selector: "app-square",
  templateUrl: "./square.component.html",
  styleUrls: ["./square.component.scss"]
})
export class SquareComponent {
  @Input() value: "X" | "O";
  @Input() winner;
  @Input() isDisabled: boolean = false;

  constructor() {}

  disableSquare() {
    this.isDisabled = false;
  }
}
