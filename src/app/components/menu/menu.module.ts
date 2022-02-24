import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";
import {MenubarModule} from 'primeng/menubar';
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import {MenuItem} from 'primeng/api';
@NgModule({
    declarations: [
      MenuComponent
    ],
    imports: [
      CommonModule,
      MenubarModule,
      ToolbarModule,
      ButtonModule,
    ],
    exports: [
      MenuComponent
    ],
    providers: [
    ]
  })
  export class MenuModule { }