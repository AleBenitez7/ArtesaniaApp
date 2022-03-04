import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from "primeng/api/messageservice";
import { ButtonModule } from "primeng/button";
import { HeaderModule } from "src/app/components/header/header.module";
import { ArtesaniasComponent } from "./artesanias-list/artesanias.component";
import { Dialog, DialogModule } from 'primeng/dialog';
import { ArtesaniasRoutingModule } from "./artesanias-routing.module";
import { ArtesaniasService } from "./artesanias.service";
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from "primeng/api";
import { InputTextModule } from "primeng/inputtext";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { MenuModule } from "src/app/components/menu/menu.module";
import { ArtesaniasEditComponent } from './artesanias-edit/artesanias-edit.component';

@NgModule({
    declarations: [
      ArtesaniasComponent,
      ArtesaniasEditComponent
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
      MenuModule,
      MessageModule,
      MessagesModule
    ],
    providers:[
      ArtesaniasService,
      Dialog,
      ConfirmationService
    ]
  })
  export class ArtesaniasModule{}