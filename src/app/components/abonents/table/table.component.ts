import { Component, OnInit } from '@angular/core';
import { PersonRawConverter } from './data/converters';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {
  private displayedColumns = [];
  private dataSource = [];
  private newAttribute: any = {};
  private abonent_opened = false;
  private abonent: Object;
  private id: number;

  public tmpConverter = new PersonRawConverter();

  constructor(private router: Router) {
    this.abonent_opened = false;

    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/abonents/table')
          this.abonent_opened = true;
        else
          this.abonent_opened = false;
      }

      if (event instanceof NavigationError) console.log(event.error);
    });
  }

  ngOnInit() {
    this.displayedColumns = this.tmpConverter.displayedColumns;
    this.dataSource = this.tmpConverter.namedArray;
  }

  private setClass(iCell) {
    return iCell == 1 || iCell == 2 || iCell == 3 ? 'center' : 'left';
  }

  private addFieldValue() {
    this.dataSource.push(this.tmpConverter.newData())
    this.newAttribute = {};

    // console.log(this.dataSource);
  }

  private deleteContentRow(i) {
    this.dataSource.splice(i, 1);
  }

  private openAbonent(id) {
    this.abonent = this.dataSource[id];
    this.id = id;
    this.router.navigate(['/abonents/table', id]);
  }

  public openedAbonent() {
    return this.abonent_opened;
  }

}


