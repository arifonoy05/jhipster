import dayjs from 'dayjs/esm';
import { IProductType } from 'app/entities/product-type/product-type.model';

export interface ICustomer {
  id: number;
  name?: string | null;
  createdAt?: dayjs.Dayjs | null;
  email?: string | null;
  productType?: Pick<IProductType, 'id' | 'name'> | null;
}

export type NewCustomer = Omit<ICustomer, 'id'> & { id: null };
