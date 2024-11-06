import { NavLink } from 'react-router-dom';
import RouterLink from '../utils/RouterLink';

export function Footer() {
  const { routeLink } = RouterLink();
  return (
    <footer className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center container mx-auto h-32 border-t dark:border-tecSuperLight border-[#38bdf8]">
      <div className="flex">
        {routeLink.map((link) => {
          return (
            <ol
              key={link.title}
              className="flex first:ml-10  "
            >
              <li className="">
                <NavLink
                  to={link.path}
                  className=" first:mr-5 text-slate-400 dark:text-tecHeavy  "
                >
                  {link.title}
                </NavLink>
              </li>
            </ol>
          );
        })}
      </div>
      <div className="md:mr-10">
        <h2 className="text-slate-400 md:text-sm text-xs md:mt-0 mt-4  dark:text-tecMedium">
          @2024 -
          <span className="text-[#38bdf8]">
            {' '}
            Desenvolvido por Jairo Miguel
          </span>
        </h2>
      </div>
    </footer>
  );
}
