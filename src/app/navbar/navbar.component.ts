import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isScrolled : boolean = false;

  @HostListener('window:scroll',['$event'])
  scrollNav(){

    // ^ Detect the scroll position
    let windowScroll = window.scrollY;

    if(windowScroll > 30){
      this.isScrolled = true;
    }
    else{
      this.isScrolled = false;
    }
  }
}
