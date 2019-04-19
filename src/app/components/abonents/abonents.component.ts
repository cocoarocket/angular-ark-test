import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abonents',
  templateUrl: './abonents.component.html',
  styleUrls: ['./abonents.component.sass']
})

export class AbonentsComponent implements OnInit {
  public currentLink: string;

  constructor() {
    this.currentLink = 'true';
  }

  ngOnInit() {

  }
}
