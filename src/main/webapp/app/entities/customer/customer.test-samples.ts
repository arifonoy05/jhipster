import dayjs from 'dayjs/esm';

import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 24379,
};

export const sampleWithPartialData: ICustomer = {
  id: 25384,
  createdAt: dayjs('2023-12-04'),
  email: 'Libbie.Torphy@hotmail.com',
};

export const sampleWithFullData: ICustomer = {
  id: 26986,
  name: 'generate Loan generating',
  createdAt: dayjs('2023-12-05'),
  email: 'Lucious.Zulauf12@gmail.com',
};

export const sampleWithNewData: NewCustomer = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
