import axios from "axios";

export default function asyncGetBooks() {
  const api = axios.create({
    baseURL: "https://www.googleapis.com",
  });

  return api.get(
    "/books/v1/volumes?q=javascript&key=AIzaSyBFeGc1dlPmCJMD-uF2Z-8LxzsHA7r0owg"
  );
}
