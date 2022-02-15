import { NoticiaService } from './services/noticia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listNoticias: any [] = [];
  public loading: boolean = false;

  constructor(private _noticiaService: NoticiaService){

  }

  buscarNoticias(parametros: any){
  this.loading = true;
  this.listNoticias = [];
  this._noticiaService.getNoticias(parametros).subscribe(data => {
    this.loading = false;
    this.listNoticias = data.articles;
    }, error => {
      this.loading = false;
      console.log(error);
    } )
  }
}


