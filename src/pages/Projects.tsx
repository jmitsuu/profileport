import { Content } from '../components/Content';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { IoIosLink } from 'react-icons/io';
import {
  Helmet,
  HelmetProvider,
} from 'react-helmet-async';
import { TitleIcon } from '../components/icon/TitleIcon';
const projects = [
  {
    icon: '',
    tagUrl: 'Em desenvolvimento',
    title: 'Em desenvolvimento...',
    description:
      'Em desenvolvimento',
    link: '',
  },
  {
    icon: (
      <BiSolidShoppingBags className="h-8  w-8 text-slate-300 dark:text-tecHeavy" />
    ),
    tagUrl: 'vercel.app',
    title: 'Movies',
    description:
      'Desenvolvido usando API Aberta de filmes, MOVIESDB. Apenas para visualização',
    link: 'https://movies-jmitsuu.vercel.app/',
  },
  {
    icon: (
      <BiSolidShoppingBags className="h-8 w-8 text-slate-300 dark:text-tecHeavy" />
    ),
    tagUrl: 'vercel.app',
    title: 'Shopping',
    description:
      'Desenvolvido usando uma API feita em NodeJS , contendo uma lista de produtos',
    link: 'https://shopping-v-7c8p.vercel.app/',
  },
];
export function Projects() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="Portfólio"
          content="Projetos criados em ReactJs e VueJs"
        />
      </Helmet>

      <section className="mt-20" id="projects">
        <h1 className="text-center text-slate-300 uppercase font-bold md:text-5xl text-3xl mb-10 flex items-center justify-center gap-x-2">
          <TitleIcon cn="h-9" />
          <span className="border-b border-[#38bdf8] pb-2 ">
            Projetos
          </span>
        </h1>
        <div className="relative md:flex justify-between items-center">
          <Content
            title="Projetos realizados para aprendizado e treinamento."
            content="Alguns projetos ainda estão em desenvolvimento ou passando por melhorias. "
          />
        </div>

        <div className="md:mt-40 mt-20">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-y-5 gap-y-10">
            {projects.map((project) => {
              return (
                <a
                  key={project.title}
                  href={`${project.link}`}
                  target="blank"
                  className="relative flex justify-center max-w-96 lg:mx-0 mx-auto"
                >
                  <span className="w-60 md:w-40 -top-2 border-4 border-[#38bdf8] absolute rounded-t-md"></span>
                  <li className="md:h-72 md:w-80 w-72 h-full mx-6 md:py-6 md:px-6 px-4 py-3 rounded-md md:mb-0 mb-5  flex flex-col justify-center border bg-tecMediumLight border-tecMedium dark:border group hover:bg-tecMediumLight/40 dark:hover:bg-tecLight/50 transition duration-200">
                    <div className="mb-5 rounded-full border  border-[#38bdf8] flex justify-center items-center h-12 w-12 p-2">
                      {project.icon}
                    </div>
                    <div>
                      <h1 className="text-slate-300 dark:text-black">
                        {' '}
                        {project.title}
                      </h1>

                      <p className="text-slate-400 dark:text-tecHeavy mt-5 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center gap-1 ">
                      <IoIosLink className="h-6 w-6 text-tecSuperLight dark:text-tecHeavy" />
                      <h1 className="text-slate-300 dark:text-black ">
                        {project.tagUrl}
                      </h1>
                    </div>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </section>
    </HelmetProvider>
  );
}
