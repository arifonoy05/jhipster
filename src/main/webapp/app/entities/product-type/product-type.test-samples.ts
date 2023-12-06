import { IProductType, NewProductType } from './product-type.model';

export const sampleWithRequiredData: IProductType = {
  id: 29562,
};

export const sampleWithPartialData: IProductType = {
  id: 80032,
};

export const sampleWithFullData: IProductType = {
  id: 47168,
  name: 'Metrics parsing',
  category: 'Steel Loan Electronics',
};

export const sampleWithNewData: NewProductType = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
