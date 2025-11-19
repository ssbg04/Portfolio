import React, { useState, useEffect, createContext, useContext } from 'react';

// Key for storing the theme mode in localStorage
const STORAGE_KEY = 'user-theme-mode';

// 1. Create the Context object (default values for initial check/autocompletion)
export const ThemeContext = createContext({
    mode: 'system',
    setMode: () => { },
    theme: 'light',
});

// Function to get system theme
const getSystemTheme = () => {
    if (!window.matchMedia) return 'light'; // Default if not supported
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// 2. Create the Provider component
export const ThemeProvider = ({ children }) => {
    // Initialize mode state from localStorage
    const [mode, setMode] = useState(() => {
        try {
            const storedMode = localStorage.getItem(STORAGE_KEY);
            if (['light', 'dark', 'system'].includes(storedMode)) {
                return storedMode;
            }
        } catch (error) {
            console.error("Could not read theme mode from localStorage:", error);
        }
        return 'system'; // Default
    });

    const [theme, setTheme] = useState('light'); // Actual applied theme: 'light' or 'dark'

    // --- EFFECT 1: Persist Mode to LocalStorage ---
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, mode);
        } catch (error) {
            console.error("Could not save theme mode to localStorage:", error);
        }
    }, [mode]);

    // --- EFFECT 2: Determine Actual Theme based on Mode ---
    useEffect(() => {
        if (mode === 'system') {
            setTheme(getSystemTheme());
        } else {
            setTheme(mode);
        }
    }, [mode]);

    // --- EFFECT 3: Listen for System Theme Changes ---
    useEffect(() => {
        if (!window || !window.matchMedia) return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            if (mode === 'system') {
                setTheme(getSystemTheme());
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [mode]);

    // --- EFFECT 4: CRITICAL FIX - Apply theme class to document body instantly ---
    useEffect(() => {
        if (!document.body) return;

        // Remove existing theme classes
        document.body.classList.remove('theme-light', 'theme-dark', 'light', 'dark');

        // Add the current theme class (e.g., 'dark')
        document.body.classList.add(`theme-${theme}`);
        document.body.classList.add(theme);

        // Ensure the Bootstrap data-bs-theme attribute is set for proper component styling
        document.body.setAttribute('data-bs-theme', theme);

        return () => {
            document.body.classList.remove(`theme-${theme}`);
            document.body.classList.remove(theme);
            document.body.removeAttribute('data-bs-theme');
        };
    }, [theme]); // Run whenever the computed 'theme' changes

    const themeData = { mode, setMode, theme };

    return (
        <ThemeContext.Provider value={themeData}>
            {children}
        </ThemeContext.Provider>
    );
};