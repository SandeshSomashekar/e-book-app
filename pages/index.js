import {useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import jsn from '../data/books.json'
import Books from '../components/Books';
import SearchBooks from '../components/SearchBooks';

const Home = () => {
    const [allBooks] = useState(jsn);
    const [searchStr, setSearchStr] = useState("");
    const inputRef = useRef(null);

    function handleSearch() {
        // Access the child component directly
        if (inputRef.current) {
          const srch = inputRef.current.value;
          setSearchStr(srch.trim());
        }
    }

    return (
        <>     
            <h1 className={styles.container}>
                <div className="my-24">
                    
                    <SearchBooks
                        handleSearch={handleSearch}
                        searchStr={searchStr}
                        inputRef={inputRef}
                    ></SearchBooks>

                    <Books 
                        books={allBooks} 
                        searchStr={searchStr}>
                    </Books>
                </div>
            </h1>
            
        </>
  );
}

export default Home;