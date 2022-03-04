import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtesaniasEditComponent } from "./artesanias-edit/artesanias-edit.component";
import { ArtesaniasComponent } from "./artesanias-list/artesanias.component";


const routes: Routes = [
    { path: '', component: ArtesaniasComponent },
    { path: 'nuevo', component: ArtesaniasEditComponent },
    { path: ':id', component: ArtesaniasEditComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ArtesaniasRoutingModule { }