import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros:any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='
    + parametros.pais +'&category='+ parametros.categoria +
    '&apiKey=85741e5c78074045a8e7053f1e4bd85e'
    return this.http.get(URL);
  }
}
