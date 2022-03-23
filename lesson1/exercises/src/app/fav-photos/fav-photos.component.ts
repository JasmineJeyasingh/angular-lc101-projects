import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Photo/Image Section Title Here";
  image1 =
    "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";
  image2 =
    "https://www.clipartmax.com/png/small/470-4707396_javascript-icon-html-css-js-icons.png";
  image3 =
    "https://alexeyza.com/assets/article_images/2015-09-28-getting-started-with-node-dot-js/nodejs.png";

  constructor() {}

  ngOnInit() {}
}
