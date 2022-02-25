import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Artesania } from "./artesanias.model";
@Injectable({
    providedIn: 'root'
})

export class ArtesaniasService{
    url="http://localhost:8080/artesanias/";
    
    constructor(
        private http: HttpClient
      ) {
        
      }
      getAll(){
        return this.http.get<Artesania[]>(this.url);
      }
    
      getById(id: any) {
        return this.http.get<Artesania>(this.url + id);
      }
    
      add(artesania: Artesania) {
        return this.http.post<Artesania>(this.url, artesania);
      }
    
      update(artesania: Artesania) {
        return this.http.put<Artesania>(this.url + artesania.id, artesania);
      }
    
      delete(id: any) {
        return this.http.delete(this.url + id);
      }
}