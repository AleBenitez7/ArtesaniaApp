import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems();
  }

  menuItems(){
    this.items=[
      {
        label: 'Artesanias',
        icon: 'pi pi-fw pi-briefcase',
        url: 'artesanias'
      },
    ]
  }
}
