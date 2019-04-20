import { Component, OnInit } from '@angular/core';
// import { animate, state, style, transition, trigger } from '@angular/animations';
import { RawAbonentsData } from './person';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {
  private names = [];
  // private named_array$ = new BehaviorSubject<any>(this.buildNamedArrays());
  private named_array = [];
  // public columnNames$ = new BehaviorSubject<any>(this.names);
  public columnNames = [];

  // dataSource$: Observable<any>;
  dataSource = [];

  constructor() { }

  ngOnInit() {
    this.names = this.buildColumnNames();
    this.named_array = this.buildNamedArrays();
    this.columnNames = this.names;
    // this.named_array$ = new BehaviorSubject<any[]>(data);

    // console.log(this.named_array);

    // this.dataSource$ = this.named_array$.pipe(map(v => Object.values(v)));
    this.dataSource = this.named_array;

    console.log(this.dataSource);
  }

  private buildColumnNames() {
    let names = RawAbonentsData[0]["data"]["metaData"].map(el => {
      return el.name;
    });

    return names;
  }

  private buildNamedArrays() {
    let named_array = [];
    let data = RawAbonentsData[0]["data"]["rows"];

    data.forEach(row => {
      let named_row = {};
      row.forEach((element, index) => {
        named_row[this.names[index]] = element;
      });
      named_array.push(named_row);
    });

    return named_array;
  }

  deleteContentRow(i) {
    console.log(i);
    let element = document.getElementById("content-row-" + i);
    element.remove();
  }

}


