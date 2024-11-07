import { NavLink } from 'react-router-dom';
// import { MdOutlineDarkMode } from 'react-icons/md';
// import { CiLight } from 'react-icons/ci';
// import { useTheme } from '../store/ThemeContext';
import RouterLink from '../utils/RouterLink';

export function Header() {
  // const { darkMode, toggleDarkMode } = useTheme();
  const { routeLink } = RouterLink();

  return (
    <header className="w-full flex justify-center relative container mx-auto h-24 ">
      <nav className="flex  px-2 py-2 mt-10 relative w-full lg:gap-x-20 mb-10 md:text-lg text-base gap-x-4 md:gap-x-0 justify-center ">
        <h1 className="md:flex hidden text-[#38bdf8] absolute md:left-0 left-4">
          Jairo Miguel
        </h1>
        {routeLink.map((link) => {
          return (
            <NavLink
              className={`dark:text-black text-slate-400 lg:uppercase lg:font-bold`}
              style={({ isActive }) => ({
                color: isActive ? '#38bdf8' : '',
              })}
              key={link.title}
              to={link.path}
            >
              {link.title}
            </NavLink>
          );
        })}
      </nav>
      {/* <div className="absolute md:right-10 right-4 top-10 text-white">
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
      </div> */}
    </header>
  );
}
