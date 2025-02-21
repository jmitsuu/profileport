import { NavLink } from 'react-router-dom';
import RouterLink from '../utils/RouterLink';
import { MenuMobile } from './menuMobile/MenuMobile';

export function Header() {
  // const { darkMode, toggleDarkMode } = useTheme();

  const { routeLink } = RouterLink();

  return (
    <header className="w-full flex justify-center relative container mx-auto h-24 ">
      <nav className="px-2 py-2 mt-10 md:flex hidden relative w-full lg:gap-x-20 mb-10 md:text-lg text-base gap-x-4 md:gap-x-2 justify-center ">
        {/* <h1 className="md:flex hidden text-[#38bdf8] absolute md:left-0 left-4">
          Jairo Miguel
        </h1> */}
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
     <MenuMobile />
    </header>
  );
}
