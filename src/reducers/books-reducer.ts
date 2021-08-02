import { GET_BOOKS } from "../utils/actionTypes";
import produce from "immer";

let initState: BooksState = {
  booksArr: [
    {
      id: "1",
      image: "#",
      title: "John Doe",
      authors: ["Some Dude"],
      categories: ["Bestseller"],
    },
  ],
};

const templateReducer = (state = initState, action: Action) => {
  let stateCopy: BooksState;

  switch (action.type) {
    case GET_BOOKS:
      stateCopy = produce(state, (newState: BooksState) => {
        newState.booksArr.push(...action.payload.booksArr);
      });

      return stateCopy;
    default:
      return state;
  }
};

export default templateReducer;
