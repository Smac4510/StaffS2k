import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

  constructor (
  ){}
  
  isSidebarActive = false;
  isContainerActive = false;

  toggleMenu() {
    this.isSidebarActive = !this.isSidebarActive;
    this.isContainerActive = !this.isContainerActive;
  }
}
