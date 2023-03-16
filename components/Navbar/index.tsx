import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useDarkMode from '../../hooks/useDarkMode';

interface MenuItemProps {
    label: string;
    href: string;
    isExternal?: boolean;
}

const menuItems: MenuItemProps[] = [
    { label: 'About', href: '/about' },
    { label: 'GitHub', href: 'https://github.com/lsprr', isExternal: true },
];

const MenuItem = ({ label, href, isExternal }: MenuItemProps) => {
    const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps = {
        href,
        className: 'text-xl whitespace-nowrap',
        'aria-label': `${label} page`,
    };

    if (isExternal) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }

    return (
        <li>
            <Link {...linkProps}>{label}</Link>
        </li>
    );
};

const Navbar = () => {
    const [collapse, setCollapse] = useState(false);
    const [colorTheme, setTheme] = useDarkMode();
    const router = useRouter();
    const pathname = router.pathname;

    useEffect(() => {
        setCollapse(false)
    }, [pathname])

    const menu = menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
    ));

    return (
        <header className='m-auto max-w-screen-lg py-12 px-4'>

            <nav className="border-gray-200 dark:bg-[#0d1117] dark:text-[#c9d1d9]">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <div className="flex items-center self-center text-2xl whitespace-nowrap">
                        <Link href="/">Luis Parra</Link>
                    </div>

                    <div className='flex items-center md:ml-auto md:mr-8'>

                        <button
                            onClick={() => setTheme()}
                            aria-label="toggle theme"
                            className="w-[1.8rem] h-[1.8rem]"
                        >
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {colorTheme === "light" ? (
                                    <>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                        />
                                    </>
                                )}
                            </svg>
                        </button>


                        <button onClick={() => setCollapse(prevCollapse => !prevCollapse)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden ml-3" aria-controls="navbar-default" aria-expanded={collapse ? "true" : "false"}>
                            <span className="sr-only">Open main menu</span>
                            {collapse
                                ? <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                : <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                            }
                        </button>

                    </div>

                    <div className={`${collapse ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="flex flex-row items-center justify-between mt-4 md:space-x-8 md:mt-0 md:text-sm text-right">
                            {menu}
                        </ul>
                    </div>

                </div>
            </nav>

        </header>
    )
}

export default Navbar;