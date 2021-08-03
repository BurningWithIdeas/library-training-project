import axios from "axios";

interface BooksRequest {
  (): Promise<any>;
}

export let booksRequest: BooksRequest;

export function setFilters({ title, category, sortBy }: BooksSearchFilters) {
  booksRequest = () => {
    const api = axios.create({
      baseURL: "https://www.googleapis.com",
    });

    let filteredRequest = `/books/v1/volumes?`;
    filteredRequest += `q=${title}`;
    filteredRequest += `&subject=${category}`;
    filteredRequest += `&orderBy=${sortBy}`;
    filteredRequest += "&key=AIzaSyBFeGc1dlPmCJMD-uF2Z-8LxzsHA7r0owg";

    return api.get(filteredRequest);
  };
}

//https://www.googleapis.com/books/v1/volumes?q=book&key=AIzaSyBFeGc1dlPmCJMD-uF2Z-8LxzsHA7r0owg
