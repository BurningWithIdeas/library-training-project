import axios from 'axios';
import { BooksSearchFilters } from 'Utils/custom-types';

// interface BooksRequest {
//   (): Promise<any>;
// }

let filteredRequest: string;

export function requestBooks() {
  const api = axios.create({
    baseURL: 'https://www.googleapis.com',
  });

  return api.get(filteredRequest);
}

export function setFilters({ title, category, sortBy }: BooksSearchFilters) {
  filteredRequest = '/books/v1/volumes?';
  filteredRequest += `q=${title}`;
  filteredRequest += category === 'all' ? '' : `+subject:${category}`;
  filteredRequest += `&orderBy=${sortBy}`;
  filteredRequest += '&key=AIzaSyBFeGc1dlPmCJMD-uF2Z-8LxzsHA7r0owg';
}
