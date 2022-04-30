import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentarios } from '../models/comentario';
const BASE_URL = '';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  model= 'Comentarios';
  constructor(private http: HttpClient) { }
  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }
  private getUrlWithID(id: any){
    return `${this.getUrl()}/${id}`;
  }
  getAllPages(){
    return this.http.get<Comentarios[]>(this.getUrl());
  }
  getOnePageC(id: string){
    return this.http.get<Comentarios[]>(`${this.getUrl()}?postId=${id}`);
  }
  getCommentGroup(id:string){
    return this.http.get<Comentarios[]>(`${this.getUrl()}/grupo/${id}`);
  }
  createPage(page:Comentarios){
    return this.http.post<Comentarios>(this.getUrl(), page);
  }
  updatePage(page:Comentarios){
    return this.http.put<Comentarios>(this.getUrlWithID(page), page)
  }
  deleteOneComment(id: number){
    return this.http.delete<Comentarios[]>(this.getUrlWithID(id));
  }
}
