// src/ThemeContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const defaultThemeContextValue: ThemeContextType = {
  darkMode: false,
  toggleDarkMode: () => {},
};
const ThemeContext = createContext<ThemeContextType>(
  defaultThemeContextValue,
);
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
