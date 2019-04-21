import { RawAbonentsData } from './person';

export class PersonRawConverter {

  public displayedColumns = [];
  public namedArray = [];

  constructor() {
    this.displayedColumns = this.buildColumnNames();
    this.namedArray = this.buildNamedArray();
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

  public newData() {
    return  {
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
  }
}
