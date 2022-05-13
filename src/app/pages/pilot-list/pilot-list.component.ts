import { pilots } from './pilot-list.config';
import { IPilot } from './models/pilot-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.scss']
})
export class PilotListComponent implements OnInit {

  public pilots: IPilot[] = pilots as IPilot[];////preguntar no me aclaro// lo envio al hijo
  public canModify: boolean = false;
  public numberSelect: number=0;

  public filterValue: string = "";

  constructor() { }

  ngOnInit(): void {
    //console.log(this.pilots);
  }
  public onDelete(id: number) {
    this.pilots = this.pilots.filter(element => element.id !== id);
    //this.filterValue = "eliminado";
  }

  public onSelect(isSelected:boolean){
    if(isSelected){
      this.numberSelect++;

    }else {
      this.numberSelect--;
    }




  }
}
