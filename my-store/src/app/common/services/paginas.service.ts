import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagina } from '../models/pagina';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})

export class PaginasService {
  model= 'Paginas';
  pagina: any[]=[];
  constructor(private http: HttpClient) { }
  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }
  private getUrlWithID(_id: any){
    return `${this.getUrl()}/${_id}`;
  }
  getAllPages(){
    return this.http.get<Pagina[]>(this.getUrl()).pipe(
      map((resp:Pagina[])=>{
        return resp;
      })
    );
  }
  getOnePage(id: string){
    return this.http.get<Pagina[]>(this.getUrlWithID(id));
  }
  createPage(page:Pagina){
    return this.http.post<Pagina>(this.getUrl(), page);
  }
  updatePage(page:Pagina){
    return this.http.put<Pagina>(this.getUrlWithID(page._id), page)
  }
  deleteOnePage(id: string){
    return this.http.delete<Pagina[]>(this.getUrlWithID(id));
  }
}
