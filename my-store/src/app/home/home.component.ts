import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagina } from '../common/models/pagina';
import { PaginasService } from '../common/services/paginas.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paginas: Pagina[]=[];
  constructor(private route:ActivatedRoute, private paginasService:PaginasService, private dialog:MatDialog) {
    this.getPages();
   }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'50%'
    }).afterClosed().subscribe(val=>{
      if(val=='save'){
        this.getPages();
      }
    });
  }
  getPages(){
    this.paginasService.getAllPages()
    .subscribe(pages => {
      console.log(pages);
      this.paginas=pages;
    });
  }
  objectKeys (objeto: any) {

    const keys = Object.keys(objeto);

    console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"

    return keys;

 }
}
