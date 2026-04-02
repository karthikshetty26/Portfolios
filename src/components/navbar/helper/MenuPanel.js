"use client"
import { useState, useEffect, useRef, memo } from 'react';
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from '@/config/site';
import navCSS from '../navbar.module.css';

const ArrowTopRight = memo(() => (
  <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"/>
  </svg>
));
ArrowTopRight.displayName = 'ArrowTopRight';

/**
 * MenuPanel - Interactive component for navigation menu
 * Handles:
 * - Menu open/close state
 * - Focus trap (accessibility)
 * - ESC key to close
 * - Click outside to close
 * - Smooth scroll navigation
 * - Responsive show/hide based on pathname
 */
export default function MenuPanel({ showMenu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const resfOne = useRef(null);
  const resftwo = useRef(null);
  const triggerRef = useRef(null);

  // Update showMenu based on pathname
  useEffect(() => {
    if (pathname !== '/' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname, isMenuOpen]);

  // Focus trap + ESC handler
  useEffect(() => {
    if (!isMenuOpen) return;

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
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target;

      if (
        resfOne.current &&
        !resfOne.current.contains(target) &&
        resftwo.current &&
        !resftwo.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Auto-close after navigation
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      {/* Menu button wrapper */}
      <div ref={resftwo}>
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
      </div>

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
