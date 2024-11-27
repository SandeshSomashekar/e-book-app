
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Book({props, showGoBack}) {
    const router = useRouter();

    const goBack = showGoBack ? <button type="input"
    className="text-white inset-x-1/4 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    ><Link href="/">Go Home</Link></button> : '';

    return (
        <div 
            onClick={()=>{router.push(`/book/${props.title}`)}}
            className="grid grid-cols-4 gap-4 border-2 rounded hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="col-span-1 min-h-56">
                <img src={props.img}/>
            </div>
            <div className="col-span-3 text-center relative">
                <p>{props.title}</p>
                <p>{props.author}</p>
                <p>{props.overview}</p>
                
                {
                    goBack
                }

                <button
                    type="input"
                    className="text-white absolute inset-x-1/4 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Visit Website</button>
            </div>
        </div>
    );
}


// "title": "The Last Olympian",
//       "author": "Rick Riordan and Robert Venditti",
//       "genre": "Fiction and Greek Mythology",
//       "overview": "The greatest monster of all, the storm giant Typhon, is on the loose, wreaking havoc and destruction across the U.S. - while Kronos's army lays siege to Manhattan. Soon Percy Jackson must make the hardest choice of his life - a choice that will save or destroy the world.",
//       "rating": 4.29,
//       "date": 2009,
//       "places": "United States of America",
//       "img": "https://covers.openlibrary.org/b/id/6624107-M.jpg",
//       "url"