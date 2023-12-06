import dayjs from 'dayjs/esm';

export interface ICustomer {
  id: number;
  name?: string | null;
  createdAt?: dayjs.Dayjs | null;
  email?: string | null;
}

export type NewCustomer = Omit<ICustomer, 'id'> & { id: null };
