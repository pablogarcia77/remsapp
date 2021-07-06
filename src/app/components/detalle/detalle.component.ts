import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from 'src/app/interfaces/auto';
import { Chofer } from 'src/app/interfaces/chofer';
import { ChoferesService } from 'src/app/services/choferes.service';
import { MovilesService } from 'src/app/services/moviles.service';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public choferes: Array<Chofer>;
  public auto: Auto;

  public chofer: Chofer;

  constructor(
    private movilesService: MovilesService,
    private choferesService: ChoferesService,
    private router: ActivatedRoute
  ) {
    this.choferes = new Array<Chofer>();

  }

  ngOnInit(): void {
    let id = this.router.params.subscribe(
      params => {
        console.log(params)
        this.movilesService.getMovil(params.id).subscribe(
          response => {
            this.auto = response[0];
            let movil = response[0].id
            console.log(this.auto)
            this.choferesService.getChofer(movil).subscribe(
              response => {
                this.choferes=response;
                this.chofer=response[0];
                console.log(this.choferes)
              }
            )
          }
        )
      }
    )
    

    
  }

  setChofer(chofer:Chofer){
    this.chofer=chofer;
  }

  sendAlert(){
    
  }

}
