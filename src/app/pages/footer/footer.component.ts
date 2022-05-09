import { networks } from './footer-list.config';
import { Isocial } from './models/footer-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

public socialNetworks: Isocial[] = networks as Isocial[];


  // public socialNetworks:Isocial[] =[

  //   {name: 'Facebook',url:'https://facebook.com',image:'https://brandemia.org/sites/default/files/inline/images/facebook_logo_portada.jpg'},
  //   {name: 'Whatsapp',url:'https://www.whatsapp.com/?lang=es',image:'https://storage.googleapis.com/www-paredro-com/uploads/2019/07/eb555489-a-do%CC%81nde-apunta-el-logo-de-whatsapp-mensaje-oculto-en-globo-de-texto.jpg'},
  //   {name: 'Twiter',url:'https://twitter.com/?lang=es', image:'https://img1.freepng.es/20180330/aue/kisspng-logo-computer-icons-business-company-twitter-5abe3092791e11.9492210015224137144961.jpg'},
  //   {name: 'Instagram',url:'https://www.instagram.com/', image:'http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png'},
   

  // ]

  constructor() { }

  ngOnInit(): void {
  }

}
