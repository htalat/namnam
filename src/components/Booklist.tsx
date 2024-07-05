import { useState } from "react";

import { Book } from "../utils/types";

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "The Great Gatsby",
      description:
        "The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.",
      read: true,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      description:
        "The story takes place during three years of the Great Depression in the fictional Maycomb, Alabama.",
      read: false,
    },
    {
      id: 3,
      title: "1984",
      description: "The story follows the life of one seemingly insignificant",
      read: false,
    },
  ]);

  return (
    <ul className="text-white mt-5">
      {books.map((book) => (
        <li
          key={book.id}
          className={`mt-1 p-2 flex flex-col gap-1 border-2 cursor-pointer ${
            book.read
              ? "line-through border-gray-500 text-gray-500"
              : " border-white"
          }`}
          onClick={(e) => console.log("clicked")}
        >
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
