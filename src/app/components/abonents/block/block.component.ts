import { Component, OnInit } from '@angular/core';
import { PersonRawConverter } from "../table/data/converters";

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.sass']
})
export class BlockComponent implements OnInit {

  private columnNames = [];
  private abonents = [];

  public tmpConverter = new PersonRawConverter();

  constructor() { }

  ngOnInit() {
    this.columnNames = this.tmpConverter.displayedColumns;
    this.abonents = this.tmpConverter.namedArray;
  }
}
