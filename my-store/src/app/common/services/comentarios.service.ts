import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentarios } from '../models/comentario';
const BASE_URL = 'mongodb://foro-demo:D2Ow0EHpYbb1Gz0Mw66AaAGGHZ3OZgjq5d3nmsynBy9DyTjwTNLU2MnW26vpUISHAxaZaihPK1vtU3VGMcU84w==@foro-demo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@foro-demo@';
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
