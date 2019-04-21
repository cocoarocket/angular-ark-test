import { RawAbonentsData } from './person';

export class PersonRawConverter {

  public displayedColumns = [];
  public namedArray = [];

  constructor() {
    this.displayedColumns = this.buildColumnNames();
    this.namedArray = this.buildNamedArray();

    // console.log(this.namedArray);
    // console.log(this.displayedColumns);
  }

  public buildColumnNames() {
    let names = RawAbonentsData[0]["data"]["metaData"].map(el => {
      return el.name;
    });

    return names;
  }

  public buildNamedArray() {
    let named_array = [];
    let data = RawAbonentsData[0]["data"]["rows"];

    data.forEach(row => {
      let named_row = {};
      row.forEach((element, index) => {
        named_row[this.displayedColumns[index]] = element;
      });
      named_array.push(named_row);
    });

    return named_array;
  }
}
