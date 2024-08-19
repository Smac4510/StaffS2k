import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-transactions',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view-transactions.component.html',
  styleUrl: './view-transactions.component.css'
})
export class ViewTransactionsComponent {
  constructor(
    private route: Router
  ){}
  back(){
    this.route.navigate(['./mainpage/Customers/CustomerPage'])
  }
}
