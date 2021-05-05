import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem!: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home' },
      { label: 'Movies', icon: 'pi pi-fw pi-calendar', routerLink: 'movies'},
      { label: 'Series', icon: 'pi pi-fw pi-pencil', routerLink: 'series' },
      { label: 'Acerca de', icon: 'pi pi-fw pi-book', routerLink: 'about' }
    ];

    this.activeItem = this.items[0];
  }

}
