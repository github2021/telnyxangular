import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  pages: any[]

  constructor() {

    this.pages = [
      { route: "home", title: "Home" },
      { route: "about", title: "About" },
      { route: "blog-feed", title: "Blog Feed" }
    ]

  }

  ngOnInit() {}

}
