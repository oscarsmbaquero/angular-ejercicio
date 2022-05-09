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

  public filterValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // public onModify() {
  //   this.canModify = !this.canModify;
  // }
  public onDelete(id: number) {
    this.pilots = this.pilots.filter(element => element.id !== id);
    this.filterValue = "eliminado";
  }
}
