import dayjs from "dayjs";


export interface IProduct {
  id: number;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  description?: string | null;
  publishDate?: dayjs.Dayjs | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
