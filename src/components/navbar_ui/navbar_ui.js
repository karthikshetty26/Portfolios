"use client"
import { useEffect, useState, memo, useRef } from 'react';
import { usePathname } from "next/navigation";
// CSS
import navCSS from './navbar.module.css';

// Memoized ArrowTopRight component to reuse icon
const ArrowTopRight = memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
    </svg>
));
ArrowTopRight.displayName = 'ArrowTopRight';

// Navigation items list
const MENU_ITEMS = [
    { name: 'HOME', href: 'home' },
    { name: 'ABOUT', href: 'about' },
    { name: (<>MY&nbsp;STACK</>), href: 'stack' },
    { name: 'PROJECTS', href: 'projects' },
    { name: 'BLOGS', href: 'blogs' },
    { name: 'CONTACT', href: 'contact' }
];

export default function NavbarUi() {
    const pathname = usePathname();
    const isRootPath = pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Lazy initializer reads the data-theme set by the pre-hydration script — avoids flash and hydration mismatch
    const [theme, setTheme] = useState(() => {
        if (typeof document !== 'undefined') {
            return document.documentElement.getAttribute('data-theme') || 'dark';
        }
        return 'dark'; // SSR fallback (will be overridden by script on client)
    });
    const [showMenu, setShowMenu] = useState(isRootPath);
    const resfOne = useRef(null);
    const resftwo = useRef(null);
    const triggerRef = useRef(null); // tracks the button that opened the menu for focus restore

    // Handle theme toggle
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Handle menu toggle
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    };

    // Smooth scroll to section
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href) {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Update `showMenu` based on pathname
    useEffect(() => {
        setShowMenu(pathname === '/');

        // If navigating away from root, close the menu if it's open
        if (pathname !== '/' && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [pathname, isMenuOpen]);

    // Listen for system theme changes (only applies when no user preference is saved)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Focus trap + ESC handler
    useEffect(() => {
        if (!isMenuOpen) {
            // Do not restore focus to the element that triggered the menu
            return;
        }

        // Move focus to first focusable element in the panel
        const panel = resfOne.current;
        const focusableSelectors = 'a[href], button, [tabindex]:not([tabindex="-1"])';
        const focusableEls = panel ? Array.from(panel.querySelectorAll(focusableSelectors)) : [];


        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                return;
            }
            if (e.key !== 'Tab' || focusableEls.length === 0) return;

            const first = focusableEls[0];
            const last = focusableEls[focusableEls.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    // Detect clicks outside menu
    useEffect(() => {
        // Function to handle clicks outside the menu
        const handleClickOutside = (e) => {
            const target = e.target;

            // Check if the click is outside the menu and exclude the menu button click
            if (
                resfOne.current &&
                !resfOne.current.contains(target) &&
                resftwo.current &&
                !resftwo.current.contains(target)
            ) {
                // Close the menu if it's open
                setIsMenuOpen(false);
            }
        };

        // Add event listener to check for clicks outside the menu
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            // Cleanup event listener
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return (
        <>
            <main className={navCSS.float_nav} ref={resftwo}>
                {/* Theme toggle */}
                <button
                    className={`${navCSS.theme_div} ${isMenuOpen ? navCSS.only_menu : ''}`}
                    onClick={toggleTheme}
                    type="button"
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? 'Dark' : 'Light'}
                    <span className={navCSS.dark_light_btn}>
                        <span>
                            {theme === 'light' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                            )}

                        </span>
                    </span>
                </button>

                {/* Menu button - only show on root path */}
                {showMenu && (
                    <button
                        ref={triggerRef}
                        className={navCSS.menu_div}
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="side-nav-panel"
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    >
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                )}
            </main>

            {/* Side nav */}
            <nav
                className={`${navCSS.side_nav} ${isMenuOpen ? navCSS.show : ''}`}
                aria-hidden={!isMenuOpen}
            >
                {/* Side nav panel */}
                <div
                    id="side-nav-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                    className={`${navCSS.hold_nav} ${isMenuOpen ? navCSS.show : ''}`}
                    ref={resfOne}
                >
                    {/* Link listing */}
                    <ul className={navCSS.show_menu_values}>
                        {MENU_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={`#${item.href}`}
                                    onClick={handleSmoothScroll}
                                    tabIndex={isMenuOpen ? 0 : -1}
                                >
                                    <ArrowTopRight /> {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}