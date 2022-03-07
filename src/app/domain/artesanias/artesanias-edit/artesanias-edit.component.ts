import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Artesania } from '../artesanias.model';
import { ArtesaniasService } from '../artesanias.service';

@Component({
  selector: 'app-artesanias-edit',
  templateUrl: './artesanias-edit.component.html',
  styleUrls: ['./artesanias-edit.component.css']
})
export class ArtesaniasEditComponent implements OnInit {

  artesania = new Artesania();
  isModoEdicion:boolean = false;
  ruta="/artesanias";
  titulo:string;
  displayDialog:boolean;
  submitted:boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ArtesaniasService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.activatedRoute.paramMap
    .subscribe(
      (paramMap)=>{
        const id = paramMap.get('id');

        if(id){
          this.isModoEdicion = true;
          this.titulo="Edit Artesania";
          this.service.getById(id)
          .subscribe(
            (artesania)=>{
              this.artesania = artesania;
            },
            (error)=>{
              console.log("error al cargar "+ error);
            }
          )
        }else {
          this.titulo="Add Artesania";
        }

      }
    )
  }
  add(){
    this.service.add(this.artesania)
    .subscribe(
      (data) => {
        this.returnToList();
      },
      (error) => {
        console.error(error)
      }
    )
  }

  update() {
    this.service.update(this.artesania)
      .subscribe(
        () => {
          this.returnToList();
        }
      )
  }
  returnToList() {
    this.router.navigate([this.ruta]);
  }


}
