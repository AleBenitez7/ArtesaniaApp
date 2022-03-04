import { Component, OnInit } from '@angular/core';
import { Artesania } from '../artesanias.model';
import { ArtesaniasService } from '../artesanias.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Dialog } from 'primeng/dialog';
import { Message } from "primeng/api";
@Component({
  selector: 'app-artesanias',
  templateUrl: './artesanias.component.html',
  styleUrls: ['./artesanias.component.css'],
  providers:[MessageService]
})
export class ArtesaniasComponent implements OnInit {

  artesanias: Artesania[] = [];

  titulo = "Artesanias";

  display: boolean = false;

  ruta = "/artesanias";
 
  constructor(
    private service: ArtesaniasService,
    private confirmationService: ConfirmationService,
    private dialog: Dialog,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getArtesanias();
  }
  getArtesanias(){
    this.service.getAll()
      .subscribe(
        (res) => {
          this.artesanias = res;
          console.log(this.artesanias);
        },
        (err) => {
          console.error(err);
        }
      )
  }

  delete(id: any) {
    this.confirmationService.confirm({
      message: 'Está seguro que desea eliminar este item?',
      header:'confirmacion',
      accept: () => {
        this.service.delete(id)
        .subscribe(
            (res) => {
              //console.log("eliminado");
              this.getArtesanias();
            },
            (error) => {
              this.display = true;
            }
          )
          location.reload();
      },
      acceptLabel: "Confirmar",
      acceptButtonStyleClass: "p-button-danger p-mr-2"
    });
  }

  
}
