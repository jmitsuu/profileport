import { NavLink } from 'react-router-dom';
import RouterLink from '../utils/RouterLink';
import { TitleIcon } from './icon/TitleIcon';
import { Social } from '../utils/Social';

export function Footer() {
  const { routeLink } = RouterLink();
  return (
    <footer className="w-full mx-auto  pt-20 mt-40 border-t dark:border-tecSuperLight border-[#38bdf8]" id='contact'>
      <div>
        <h1 className="text-slate-300 text-center dark:text-tecHeavy font-bold text-2xl text-pretty uppercase mb-10 flex items-center justify-center gap-x-2">
          <TitleIcon cn="h-9" />
          <span className="border-b border-[#38bdf8] pb-2 ">
            Contato
          </span>
        </h1>
        <div className="w-full">
          <ul className="flex md:flex-row flex-col justify-center items-center gap-10 mt-20 ">
            {Social.map((social) => {
              return (
                <li
                  key={social.name}
                  className=" text-slate-400"
                >
                  <a
                    href={social.link}
                    className="flex items-center gap-x-2"
                  >
                    {' '}
                    {social.icon} {social.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center  mx-auto h-32 mt-10">
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
      </div>
    </footer>
  );
}
