import { useState, useEffect, useRef} from 'react'
import { Home, Layers, Info, Folder, Mail } from 'lucide-react';

const iconMap = {
  HOME: <Home className="w-4 h-4" />,
  SERVICES: <Layers className="w-4 h-4" />,
  ABOUT: <Info className="w-4 h-4" />,
  PROJECTS: <Folder className="w-4 h-4" />,
  CONTACT: <Mail className="w-4 h-4" />,
};

const navItems = ['HOME', 'SERVICES', 'ABOUT', 'PROJECTS', 'CONTACT'];

function NavigationBar() { 
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleEvent = (e) => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false)
            }

            if (
                menuOpen &&
                !menuRef.current?.contains(e.target) &&
                !buttonRef.current?.contains(e.target)
            ) {
                setMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleEvent)
        document.addEventListener('mousedown', handleEvent)

        return () => {
            window.removeEventListener('resize', handleEvent)
            document.removeEventListener('mousedown', handleEvent)
        }
    }, [menuOpen])

    return (
        <nav className="
            fixed w-full top-0 bg-primary text-white p-6 flex items-center justify-end
            md:justify-center
            lg:justify-end 
            font-semibold z-50
        ">
            <ul
                className={`hidden
                    md:flex md:p-0 md:gap-10
                    lg:pr-6 
                `}
            >
                {navItems.map(item => (
                <li key={item}>
                    <a
                    onClick={() => setMenuOpen(false)}
                    className={`
                        text-[10px] md:text-lg
                        block p-2 text-white hover:text-text-hover
                        transition-colors duration-150
                    `}
                    href={`#${item.toLowerCase()}`}
                    >
                    {item}
                    </a>
                </li>
                ))}
            </ul>

            <button
                ref={buttonRef} 
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
                    hamburgerMenuButton-bar
                    ${menuOpen
                    ? 'rotate-45 translate-x-[3px] translate-y-[3px]'
                    : 'rotate-0 translate-x-0 translate-y-0'
                    }
                `}
                />
                {/* bottom bar */}
                <span
                className={`
                    hamburgerMenuButton-bar
                    ${menuOpen
                    ? '-rotate-45 translate-x-[3px] -translate-y-[3px]'
                    : 'rotate-0 translate-x-0 translate-y-0'
                    }
                `}
                />
            </button>

            {/* Mobile */}
            <ul
                ref={menuRef}
                className={`md:hidden absolute top-full left-0 w-full
                    origin-top bg-white text-black
                    transition-all duration-300 ease-in-out
                    ${menuOpen 
                        ? 'flex flex-col opacity-100 scale-y-100' 
                        : 'opacity-0 scale-y-0 pointer-events-none'
                    }
                `}
            >
                {navItems.map(item => (
                    <li key={item}>
                        <a
                            onClick={() => setMenuOpen(false)}
                            className={`
                            flex gap-2 items-center
                            text-[10px] md:text-lg
                            p-2 border-b w-full border-gray-300
                            hover:bg-gray-100
                            transition-colors duration-150
                            `}
                            href={`#${item.toLowerCase()}`}
                        >
                            {iconMap[item]}
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavigationBar;