"use client"
import { useState } from 'react';
import { usePathname } from "next/navigation";
// Components
import ThemeToggleButton from './helper/ThemeToggleButton';
import MenuPanel from './helper/MenuPanel';
// CSS
import navCSS from './navbar.module.css';

/**
 * NavbarUi - Main navbar component
 * Acts as a wrapper to manage state for theme and menu interactions
 * Composes ThemeToggleButton and MenuPanel client components
 * This component must be 'use client' because it manages state and composition
 */
export default function NavbarUi() {
    const pathname = usePathname();
    const isRootPath = pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <main className={navCSS.float_nav}>
                {/* Theme Toggle Button */}
                <ThemeToggleButton isMenuOpen={isMenuOpen} />
                {/* Menu Panel - only show on root path */}
                <MenuPanel showMenu={isRootPath} />
            </main>

        </>
    );
}