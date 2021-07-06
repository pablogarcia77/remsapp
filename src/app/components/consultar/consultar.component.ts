import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit {

  public movil: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  consultarMovil(){
    this.router.navigate(['detalle/',this.movil])
  }

}
