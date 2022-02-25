import { Component, OnInit } from '@angular/core';
import { Artesania } from './artesanias.model';
import { ArtesaniasService } from './artesanias.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-artesanias',
  templateUrl: './artesanias.component.html',
  styleUrls: ['./artesanias.component.css']
})
export class ArtesaniasComponent implements OnInit {

  artesanias: Artesania[] = [];

  titulo = "Artesanias";

  display: boolean = false;

  ruta = "/artesanias";

  constructor(
    private service: ArtesaniasService,
    private confirmationService: ConfirmationService
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
      accept: () => {
        this.service.delete(id)
          .subscribe(
            (res) => {
              this.getArtesanias();
            },
            (error) => {
              this.display = true;
            }
          )
      },
      acceptLabel: "Confirmar",
      acceptButtonStyleClass: "p-button-danger p-mr-2"
    });
  }

}
