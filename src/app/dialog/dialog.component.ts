import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Pagina } from '../common/models/pagina';
import { PaginasService } from '../common/services/paginas.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private route:ActivatedRoute, private paginasService:PaginasService, private dialogRef:MatDialogRef<DialogComponent>) { }
  descripcion='';
  titulo='';
  paginas: Pagina[]=[];
  ngOnInit(): void {
  }
  onSubmit(value: any){
    this.createPage(this.titulo, this.descripcion);
    //this.comentarios.push(this.texto);
    this.titulo="";
  }
  createPage(titulo:string, descripcion:string){
    const page = {
      titulo: titulo,
      descripcion: descripcion
    };
    this.paginasService.createPage(page)
    .subscribe((newPage) => {
      console.log(newPage);
      this.dialogRef.close('save');
    });
  }

}
