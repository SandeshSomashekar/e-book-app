import { PiSunFill } from "react-icons/pi";
import { useTheme } from 'next-themes'

export default function Header() {
    const { theme, setTheme } = useTheme();
    function toggleTheme() {
        if(theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Library</span>
                    </a>
                    <div className="relative h-4 w-4 ...">
                    <div className="absolute top-0 right-6 h-2 w-2" onClick={()=>{toggleTheme()}}><PiSunFill size={24}/></div>
                </div>
                </div>

            </nav>        
        </>
    );
}

