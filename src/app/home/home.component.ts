import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { provideRouter, ɵROUTER_PROVIDERS } from '@angular/router';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})

export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
     this.ofertas = this.ofertasService.getOfertas()
     console.log(this.ofertas)
       //this.ofertas = this.ofertasService.getOfertas()
       //console.log(this.ofertas)





    this.ofertasService.getOfertas2()
     .then(( ofertas: Oferta[] ) => {  
      console.log( 'a função resolvida() foi depois de 3 segundos')
      this.ofertas = ofertas},( param: any ) => { console.log(param)}

    ) 
 
  }
}
