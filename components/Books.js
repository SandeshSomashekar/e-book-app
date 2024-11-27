import { useState, useRef } from "react";
import Book from "./Book";
import SearchBooks from "./SearchBooks";

export default function Books({ books, searchStr }) {
//   const [bookList, setBookList] = useState(books);

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {books.map((b) => {
            if(searchStr.trim()){
                if(b.title.toLocaleLowerCase().includes(searchStr) || b.author.toLocaleLowerCase().includes(searchStr)) {
                    return <Book props={b} key={b.title}></Book>
                }
            } else {
                return <Book props={b} key={b.title}></Book>
            }
        })}
      </div>
    </>
  );
}
