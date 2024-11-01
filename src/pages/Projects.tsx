import { Content } from '../components/Content';
import {
  BiSolidMoviePlay,
  BiSolidShoppingBags,
} from 'react-icons/bi';
import { IoIosLink } from 'react-icons/io';
import {
  Helmet,
  HelmetProvider,
} from 'react-helmet-async';
const projects = [
  {
    icon: (
      <BiSolidMoviePlay className="h-8 w-8 text-tecSuperLight dark:text-tecHeavy" />
    ),
    tagUrl: 'reviews.app',
    title: 'Movies Review',
    description:
      'Desenvolvido usando API de filmes, MOVIESDB e integrando com uma API simples, para cadastro dos reviews.',
    link: 'https://yourreviews.app.jairo3478.c35.integrator.host/',
  },
  {
    icon: (
      <BiSolidShoppingBags className="h-8  w-8 text-tecSuperLight dark:text-tecHeavy" />
    ),
    tagUrl: 'vercel.app',
    title: 'Movies',
    description:
      'Desenvolvido usando API de filmes, MOVIESDB. Apenas para visualização',
    link: 'https://movies-jmitsuu.vercel.app/',
  },
  {
    icon: (
      <BiSolidShoppingBags className="h-8 w-8 text-tecSuperLight dark:text-tecHeavy" />
    ),
    tagUrl: 'vercel.app',
    title: 'Shopping',
    description:
      'Desenvolvido usando API propria, contendo uma lista de produtos',
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

      <div className="my-10">
        <div className="relative md:flex justify-between items-center">
          <Content
            title="Projetos realizados para aprendizado e treinamento."
            content="Alguns projetos ainda estão em desenvolvimento ou passando por melhorias. "
          />
        </div>

        <div className="mt-40">
          <ul className="grid md:grid-cols-3 gap-0">
            {projects.map((project) => {
              return (
                <a
                  key={project.title}
                  href={`${project.link}`}
                  target="blank"
                >
                  <li className="md:h-72 md:w-80 py-6 px-6 rounded-md md:mb-0 mb-5  flex flex-col justify-center border border-tecMedium dark:border hover:bg-tecMedium dark:hover:bg-tecLight/50 transition duration-200">
                    <div className="mb-5 rounded-full border dark:border-black flex justify-center items-center h-12 w-12 p-2">
                      {project.icon}
                    </div>
                    <div>
                      <h1 className="text-tecSuperLight dark:text-black">
                        {' '}
                        {project.title}
                      </h1>

                      <p className="text-tecMediumLight dark:text-tecHeavy mt-5 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center gap-1 ">
                      <IoIosLink className="h-6 w-6 text-tecSuperLight dark:text-tecHeavy" />
                      <h1 className="text-tecSuperLight dark:text-black ">
                        {project.tagUrl}
                      </h1>
                    </div>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </HelmetProvider>
  );
}
