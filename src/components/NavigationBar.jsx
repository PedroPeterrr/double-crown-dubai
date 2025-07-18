import { useState } from 'react'

function NavigationBar() { 
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = ['HOME', 'SERVICES', 'ABOUT', 'PROJECTS', 'CONTACT']

    return (
        <nav className="
            fixed w-full top-0 bg-primary text-white p-6 flex items-center justify-end
            font-semibold z-1000
        ">

            <button
                id="hamburgerMenuButton"
                onClick={() => setMenuOpen(prev => !prev)}
                className="flex flex-col justify-center items-center 
                w-5 h-5 bg-transparent 
                border-none cursor-pointer 
                focus:outline-none md:hidden"
                aria-label="Toggle menu"
            >
                {/* top bar */}
                <span
                className={`
                    block w-full h-[2px] bg-white mt-1 
                    transition-transform duration-300 ease-in-out
                    ${menuOpen
                    ? 'rotate-45 translate-x-[3px] translate-y-[3px]'
                    : 'rotate-0 translate-x-0 translate-y-0'
                    }
                `}
                />
                {/* bottom bar */}
                <span
                className={`
                    block w-full h-[2px] bg-white mt-1
                    transition-transform duration-300 ease-in-out
                    ${menuOpen
                    ? '-rotate-45 translate-x-[3px] -translate-y-[3px]'
                    : 'rotate-0 translate-x-0 translate-y-0'
                    }
                `}
                />
            </button>

            <ul
                className={`
                ${menuOpen ? 'flex' : 'hidden'}
                absolute top-full left-0 w-full
                flex-col origin-top
                bg-white   
                overflow-hidden

                md:static md:flex md:overflow-visible
                md:bg-transparent
                md:flex-row md:p-0 md:justify-center md:gap-10
                lg:justify-end lg:pr-6
                `}
            >
                {navItems.map(item => (
                <li key={item}>
                    <a
                    onClick={() => setMenuOpen(false)}
                    className={`
                        text-[10px] md:text-lg
                        block w-full p-2 transition-colors duration-150
                        ${menuOpen
                        ? 'text-black border-b border-gray-300 hover:bg-gray-100' 
                        : 'text-white hover:text-text-hover'
                        }
                        md:border-none md:text-white md:hover:bg-transparent
                    `}
                    href={`#${item.toLowerCase()}`}
                    >
                    {item}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavigationBar;