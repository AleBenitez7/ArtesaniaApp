import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArtesaniasComponent } from "./artesanias.component";


const routes: Routes = [
    { path: '', component: ArtesaniasComponent },
    //{ path: 'nuevo', component: TaskEditComponent },
    //{ path: ':id', component: TaskEditComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ArtesaniasRoutingModule { }