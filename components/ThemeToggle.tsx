
import React from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggle }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button 
        className="p-3 bg-background-light dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center text-gray-900 dark:text-gray-100" 
        onClick={toggle}
        aria-label="Toggle dark mode"
      >
        <span className="material-icons-outlined">
          {isDark ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
