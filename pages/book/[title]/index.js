import { useState } from 'react';
import jsn from '../../../data/books.json'
import Book from '../../../components/Book';
import styles from '../../../styles/Home.module.css';
import { usePathname } from 'next/navigation'

const Home = () => {
    const [allBooks] = useState(jsn);
    const parts = usePathname().split('/');
    const bookName = decodeURIComponent( parts[parts.length-1]);

    const [book] = useState(jsn.find(book => book.title === bookName));
    return (
        <>     
            <h1 className={styles.container}>
                <div className="my-24">
                    <Book props={book} key={book.title} showGoBack={true}></Book>
                </div>
            </h1> 
        </>
  );
}

export default Home;