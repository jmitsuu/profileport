import { NavLink } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useTheme } from '../store/ThemeContext';
import RouterLink from '../utils/RouterLink';

export function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { routeLink } = RouterLink();
  return (
    <header className="w-full flex justify-center relative">
      <nav className="flex items-center px-5 py-2 mt-10 rounded-full  bg-tecMedium dark:bg-white text-lg mb-10 md:text-lg justify-center gap-x-4 border border-slate-500 ">
        {routeLink.map((link) => {
          return (
            <NavLink
              className={`dark:text-black text-white uppercase`}
              style={({ isActive }) => ({
                color: isActive ? '#4fd1c5' : '',
              })}
              key={link.title}
              to={link.path}
            >
              {link.title}
            </NavLink>
          );
        })}
      </nav>
      <div className="absolute md:right-10 right-4 top-10 text-white">
        {darkMode ? (
          <MdOutlineDarkMode
            className="w-10 h-10 cursor-pointer dark:text-black"
            onClick={toggleDarkMode}
          />
        ) : (
          <CiLight
            className="w-10 h-10 cursor-pointer dark:text-black"
            onClick={toggleDarkMode}
          />
        )}
      </div>
    </header>
  );
}
