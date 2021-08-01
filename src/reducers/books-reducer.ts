import { ADD_BOOKS } from "../utils/ActionTypes";
import Img1 from "Assets/book1.jpg";
import produce from "immer";

let initState: BooksState = {
  booksArr: [
    {
      id: "1",
      image: { Img1 },
      name: "John Doe",
      autor: ["Some Dude"],
      category: ["Bestseller"],
    },
  ],
};

const templateReducer = (state = initState, action: Action) => {
  let stateCopy: BooksState;

  switch (action.type) {
    case ADD_BOOKS:
      stateCopy = produce(state, (newState: BooksState) => {
        newState.booksArr.push(...action.payload.booksArr);
      });

      return stateCopy;
    default:
      return state;
  }
};

export default templateReducer;
