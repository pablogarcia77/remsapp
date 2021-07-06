import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

  // Encabezados HTTP
  const cudOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  const cudOptionsXWWForm = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})
  };
  const cudOptionsHtml = {
    headers: new HttpHeaders({ 'Content-Type': 'text/html; charset=utf-8'})
  };

  
@Injectable({
  providedIn: 'root'
})
export class MovilesService {
 
  // URL Base
  private urlBase = environment.url_servicios_base;

  // Variables de URL API REST
  private apiGetDetalleMovil = this.urlBase + '/moviles.php';

  constructor(
    public http: HttpClient
  ) { }

  getMovil(movil: number):Observable<any>{
    return this.http.get(this.apiGetDetalleMovil + '?movil=' + movil);
  }

}
