import { Seller } from "./seller"

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}

export type SalePage = {
  content?: Sale[];
  // pageable: {
  //   sort: {
  //       sorted: boolean,
  //       unsorted: boolean,
  //       empty: boolean
  //   },
  //   offset: number,
  //   pageNumber: number,
  //   pageSize: number,
  //   paged: boolean,
  //   unpaged: boolean
  // },
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  size?: number,
  first: boolean,
  numberOfElements?: number,
  empty?: boolean
}

export type SaleSum = {
  sellerName: string;
  sum: number;
}

export type SaleSuccessTax = {
  sellerName: string;
  visited: number;
  deals: number;
}