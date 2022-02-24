import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from "primeng/api/messageservice";
import { ButtonModule } from "primeng/button";
import { HeaderModule } from "src/app/components/header/header.module";
import { ArtesaniasComponent } from "./artesanias.component";
import { Dialog, DialogModule } from 'primeng/dialog';
import { ArtesaniasRoutingModule } from "./artesanias-routing.module";
import { ArtesaniasService } from "./artesanias.service";
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from "primeng/api";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "src/app/components/menu/menu.module";
@NgModule({
    declarations: [
      ArtesaniasComponent
    ],
    imports: [
      ArtesaniasRoutingModule,
      CommonModule,
      FormsModule,
      ButtonModule,
      HeaderModule,
      ButtonModule,
      DialogModule,
      ConfirmDialogModule,
      CardModule,
      DialogModule,
      ConfirmDialogModule,
      TableModule,
      InputTextModule,
      HeaderModule,
      CardModule,
      MenuModule
    ],
    providers:[
      ArtesaniasService,
      Dialog,
      ConfirmationService
    ]
  })
  export class ArtesaniasModule{}