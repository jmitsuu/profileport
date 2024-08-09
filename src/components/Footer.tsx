import { NavLink } from 'react-router-dom';

const routeLink = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/projects',
    title: 'Projetos',
  },
  {
    path: '/about',
    title: 'Sobre',
  },
];
export function Footer() {
  return (
    <footer className="w-full flex items-center justify-between container mx-auto h-32 border-t dark:border-tecSuperLight   border-tecMedium">
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
                  className=" first:mr-5 text-tecSuperLight dark:text-tecHeavy  "
                >
                  {link.title}
                </NavLink>
              </li>
            </ol>
          );
        })}
      </div>
      <div className="mr-10">
        <h2 className="text-tecLight text-sm dark:text-tecMedium">
          @2024 Jairo Miguel. Todos os direitos
          reservados
        </h2>
      </div>
    </footer>
  );
}
