import { NavLink } from 'react-router-dom';
// import { MdOutlineDarkMode } from 'react-icons/md';
// import { CiLight } from 'react-icons/ci';
// import { useTheme } from '../store/ThemeContext';
import RouterLink from '../utils/RouterLink';
import { ImMenu } from 'react-icons/im';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';

export function Header() {
  // const { darkMode, toggleDarkMode } = useTheme();
  const [modal, setModal] = useState(false);
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
      <ImMenu
        onClick={() => {
          setModal(true);
        }}
        className="rounded-md text-[#38bdf8] border-[#38bdf8] border cursor-pointer md:hidden flex float-right text-5xl absolute right-4 top-4"
      />
      <div
        className={`transition-all duration-500 flex justify-center  bg-[#38bdf8] h-72 opacity-90 z-40 fixed right-0 rounded-bl-md ${modal ? 'flex w-[95%]' : 'w-[0%]'}`}
      >
        <nav
          className={`px-2 py-2 flex flex-col  justify-center items-center z-50 gap-y-2 ${modal ? 'flex opacity-100' : 'hidden opacity-0'}`}
        >
          {routeLink.map((link) => {
            return (
              <NavLink
                className={`dark:text-black text-white font-bold lg:uppercase lg:font-bold  text-3xl`}
                style={({ isActive }) => ({
                  color: isActive
                    ? 'text-black'
                    : '',
                })}
                key={link.title}
                to={link.path}
              >
                {link.title}
              </NavLink>
            );
          })}
        </nav>
        <IoMdCloseCircleOutline
          onClick={() => {
            setModal(false);
          }}
          className="absolute bottom-1 left-1 text-4xl text-white cursor-pointer z-50"
        />
      </div>
    </header>
  );
}
