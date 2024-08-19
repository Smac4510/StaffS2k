import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  items = [
    {
      routeLink: './Home',
      icon: 'fa fa-home',
      label: 'Home'
    },
    {
      routeLink: './Expenses',
      icon: 'fa-solid fa-jug-detergent',
      label: 'Expenses'
    },
    {
      routeLink: './Customers',
      icon: 'fa-regular fa-users',
      label: 'Customers'
    },
    {
      routeLink: './Reports',
      icon: 'fa-regular fa-file-chart-column',
      label: 'Reports'
    },
    {
      routeLink: './../login',
      icon: 'fa-solid fa-left-from-bracket',
      label: 'LogOut'
    }
  ]

  logo: any ='/image/logoS2k.png';
  logIcon: any = 'fa-solid fa-left-from-bracket';

  ngOnInit() {
    
  }
  
}
