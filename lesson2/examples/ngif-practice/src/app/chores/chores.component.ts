import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chores",
  templateUrl: "./chores.component.html",
  styleUrls: ["./chores.component.css"],
})
export class ChoresComponent implements OnInit {
  chores = ["clean kitchen"];
  finishedChores = [
    "Clean Kitchen",
    "Buy groceries",
    "clean house",
    "empty dishwasher",
  ];

  targetImage =
    "https://image.shutterstock.com/shutterstock/photos/304114247/display_1500/stock-vector-vector-illustration-in-super-mom-concept-many-hands-working-with-very-busy-business-and-housework-304114247.jpg";

  constructor() {}

  ngOnInit() {}
}
