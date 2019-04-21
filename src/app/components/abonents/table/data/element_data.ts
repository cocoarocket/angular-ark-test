import { iPersons } from './persons_interface';
import { PersonRawConverter } from './converters';

let tmpConverter = new PersonRawConverter();

export const ELEMENT_DATA: iPersons[] = tmpConverter.buildNamedArray();
