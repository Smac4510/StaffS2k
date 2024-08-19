import { Component } from '@angular/core';
import { ReceivingComponent } from "../receiving/receiving.component";
import { ReleasingComponent } from "../releasing/releasing.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReceivingComponent, ReleasingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})

export class HomePageComponent {

}
