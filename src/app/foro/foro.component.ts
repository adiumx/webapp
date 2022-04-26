import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Pagina } from '../common/models/pagina';
import { Observable } from 'rxjs';
import { PaginasService } from '../common/services/paginas.service';
import { ComentariosService } from '../common/services/comentarios.service';
import { Comentarios } from '../common/models/comentario';
const emptyComment: Comentarios = {
  _id: 0,
  comentario: '',
  pagina: '',
}

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {
  indice=null;
  texto="";
  pagina: any;
  public comentarios: Comentarios[]=[];
  selectedComment=emptyComment;
  actComment = '';
  //comentarios:Comentarios={id:0,postId:0,comentario:""}
  constructor(private route:ActivatedRoute, private paginasService:PaginasService, private comentariosService:ComentariosService) {
    this.pagina={};
    this.getPage();
    this.getComment();
  }

  ngOnInit(): void {
  }
  onSubmit(value: any){

    this.createComment(this.route.snapshot.params['id'],this.texto);
    //this.comentarios.push(this.texto);
    this.texto="";


  }
  getComment(){
    this.comentariosService.getCommentGroup(this.route.snapshot.params['id'])
    .subscribe(coment => {
      this.comentarios= coment;
    });
  }
  createComment( pageId:string, comentario:string){
    console.log(pageId)
    const page = {

      pagina: pageId,
      comentario: comentario,
    };
    this.comentariosService.createPage(page)
    .subscribe((newPage) => {
      this.getComment();
    });
  }
  getAllPages(){
    this.paginasService.getAllPages()
    .subscribe(pages => {
    });
  }
  getPage(){
    this.paginasService.getOnePage(this.route.snapshot.params['id'])
    .subscribe(res => {
      this.pagina=res;
    });
  }

  // updatePage(){
  //   const page = {
  //     id: 6,
  //     titulo: "hola2"
  //   };
  //   this.paginasService.updatePage(page)
  //   .subscribe((todo) => {
  //     console.log(todo);
  //   });
  // }
  deletePage(){
    if(confirm("¿Estás seguro que quieres borrarlo?")){
    this.paginasService.deleteOnePage(this.route.snapshot.params['id'])
    .subscribe(page=> {
      console.log(page);
      this.getComment();
    });
    }
  }
  deleteComment(id:number){
    this.comentariosService.deleteOneComment(id)
    .subscribe(page=> {
      console.log(page);
      this.getComment();
    });
  }
  selectComment(comment: Comentarios){
    this.selectedComment = comment;
    this.actComment = comment.comentario;
    console.log(comment);
  }
}
