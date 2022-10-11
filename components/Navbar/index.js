import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Navbar = () => {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const menu = ['about', 'resume'];
    const [collapse, setCollapse] = useState(false);
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        setCollapse(false)
    }, [pathname])

    return (
        <header className='m-auto max-w-screen-lg py-12 px-4'>

            <nav className="bg-white border-gray-200">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <div className="flex items-center self-center text-2xl whitespace-nowrap">
                        <Link href="/">Luis Parra</Link>
                    </div>

                    <button onClick={() => setCollapse(prevCollapse => !prevCollapse)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {collapse
                            ? <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            : <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                        }
                    </button>

                    <div className={`${collapse ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="flex flex-row justify-evenly mt-4 md:space-x-8 md:mt-0 md:text-sm text-right">
                            {menu.map((item, index) => (
                                <li key={index} className={`${item} text-xl whitespace-nowrap`} aria-current="page">
                                    <Link href={item === 'resume' ? './assets/file/resume.pdf' : item}>{capitalizeFirstLetter(item)}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </nav>

        </header>
    )
}

export default Navbar;