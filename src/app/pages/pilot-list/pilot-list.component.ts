import { pilots } from './pilot-list.config';
import { IPilot } from './models/pilot-models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.scss']
})
export class PilotListComponent implements OnInit {

  public pilots: IPilot[] = pilots as IPilot[];

  constructor() { }

  ngOnInit(): void {
  }

}
