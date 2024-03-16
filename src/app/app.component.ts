import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ListingsPageComponent} from "./listings-page/listings-page.component";

@Component({
  selector: 'app-root',
  // remove
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buy-sell-app';
}
