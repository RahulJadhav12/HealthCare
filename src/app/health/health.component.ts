import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
})
export class HealthComponent {
  @ViewChild('#navbar') navbar!: ElementRef<any>;



  MenuBar() {
    const MenuNavbar: any = document.getElementById('navbar');
    if (MenuNavbar?.style.display !== 'flex') {
      MenuNavbar.style.display = 'flex';
      console.log('true', MenuNavbar.style.display);
    } else {
      MenuNavbar.style.display = 'none';
      console.log('false==>', MenuNavbar.style.display);
    }
  }
}
