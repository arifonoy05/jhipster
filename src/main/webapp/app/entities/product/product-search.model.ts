import dayjs from "dayjs";


export interface ProductSearch {
  name?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  quantityUpTo?: number | null;
  publishDateTo?: dayjs.Dayjs | null;
  publishDateFrom?: dayjs.Dayjs | null;
}

export type NewProductSearch = Omit<ProductSearch, 'id'> & { id: null };
