import { Component, OnInit } from '@angular/core';
// import { animate, state, style, transition, trigger } from '@angular/animations';
import { RawAbonentsData } from './person';
import { ELEMENT_DATA } from './element_data';
import { iPersons } from './persons_interface';
import { PersonRawConverter } from './converters';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {


  // dataSource = ELEMENT_DATA;
  // displayedColumns: string[] = [];

  private displayedColumns = [];
  private dataSource = [];
  private newAttribute: any = {};

  constructor() {}

  ngOnInit() {
    let tmpConverter = new PersonRawConverter();

    this.displayedColumns = tmpConverter.displayedColumns;
    this.dataSource = tmpConverter.namedArray;

    console.log(this.dataSource);
    console.log(this.displayedColumns);
  }

  private setClass(iCell) {
    return iCell == 1 || iCell == 2 || iCell == 3 ? 'center' : 'left';
  }

  private addFieldValue() {
    let newData = {
      ACC1NUM: "acc num",
      BIRTHDATE: "birth date",
      CARD: "card",
      CARDTEMPLNAME: " card temp name",
      CURRNAME: "cur name",
      DOCNUM: "doc num",
      DOCSERIES: "series",
      DOCTYPENAME: "type",
      FIRSTNAME: "first name",
      IDCARD: Math.floor(Math.random() * 100) + 1,
      IDPERSON: Math.floor(Math.random() * 100) + 1,
      IDTASKAUTHSTATUS: Math.floor(Math.random() * 100) + 1,
      LASTNAME: "last name",
      ORGNAMESHORT: "org short name",
      PATRONYMIC: "patr name",
      PERSONTYPENAME: "person type name",
      STATUSNAME: "status name"
    }
    this.dataSource.push(newData)
    this.newAttribute = {};

    console.log(this.dataSource);
  }

  private deleteContentRow(i) {
    this.dataSource.splice(i, 1);
  }

}


