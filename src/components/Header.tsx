import { NavLink } from 'react-router-dom';
import { MdOutlineDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { useTheme } from '../store/ThemeContext';
import RouterLink from '../utils/RouterLink';

export function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { routeLink } = RouterLink();
  return (
    <header className="w-full flex justify-center relative container mx-auto h-24">
      <nav className="lg:flex hidden px-5 py-2 mt-10 relative w-full gap-x-20  text-lg mb-10 md:text-lg justify-center ">
        <h1 className="text-[#38bdf8] absolute left-0">
          Jairo Miguel
        </h1>
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
