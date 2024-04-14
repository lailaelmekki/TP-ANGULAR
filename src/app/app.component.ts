import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgForOf, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  actions : Array<any>=[
    {title : "Home" , "route":"/home", icon : "house"},
    {title : "Products" , "route":"/products", icon : "search"},
    {title : "New Product" , "route":"/newProduct", icon : "safe"}
  ];
  currentAction :any;

  setCurrentAction(action: any) {
    this.currentAction=action ;

  }
}
