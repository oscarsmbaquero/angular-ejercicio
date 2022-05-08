import { Isocial } from './models/footer-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public socialNetworks:Isocial[] =[

    {name: 'facebook',url:'https://facebook.es'},
    {name: 'facebook',url:'https://facebook.es'},
    {name: 'facebook',url:'https://facebook.es'},
    {name: 'facebook',url:'https://facebook.es'},
    {name: 'facebook',url:'https://facebook.es'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
