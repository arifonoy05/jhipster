import dayjs from 'dayjs/esm';

import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
};

export const sampleWithPartialData: IProduct = {
  id: 78560,
  description: 'Brand Programmable',
  publishDate: dayjs('2023-12-05'),
};

export const sampleWithFullData: IProduct = {
  id: 49054,
  name: 'deliver',
  price: 39641,
  quantity: 99933,
  description: 'driver synthesizing',
  publishDate: dayjs('2023-12-04'),
};

export const sampleWithNewData: NewProduct = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
