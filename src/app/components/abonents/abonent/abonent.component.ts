import { Component, OnInit, Input } from '@angular/core';
import { columns } from '../table/data/scheme'

@Component({
  selector: 'app-abonent',
  templateUrl: './abonent.component.html',
  styleUrls: ['./abonent.component.sass']
})
export class AbonentComponent implements OnInit {

  @Input() abonent: Object;
  @Input() id: number;

  private columns = columns;

  constructor() { }

  ngOnInit() {

  }

}
