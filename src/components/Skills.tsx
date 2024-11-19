import { FaReact, FaVuejs } from 'react-icons/fa';
import {
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoNodejs,
} from 'react-icons/io5';
import { TitleIcon } from './icon/TitleIcon';

const devImages = [
  {
    textAlt: 'dev-1',
    title: 'ReactJS',
    icon: (
      <FaReact className="h-10 w-10 text-blue-300" />
    ),
  },
  {
    textAlt: 'dev-2',
    title: 'VueJS',
    icon: (
      <FaVuejs className="h-10 w-10 text-green-300" />
    ),
  },
  {
    textAlt: 'dev-3',
    title: 'JavaScript',
    icon: (
      <IoLogoJavascript className="h-10 w-10 text-yellow-300" />
    ),
  },
  {
    textAlt: 'dev-4',
    title: 'CSS',
    icon: (
      <IoLogoCss3 className="h-10 w-10 text-blue-500" />
    ),
  },
  {
    textAlt: 'dev-5',
    title: 'NodeJS',
    icon: (
      <IoLogoNodejs className="h-10 w-10 text-green-500" />
    ),
  },
];
export function Skills() {
  return (
    <section
      className="md:my-20 bg-tecMediumLight rounded-md  py-20"
      id="skills"
    >
      <h1 className="text-slate-300 text-center dark:text-tecHeavy font-bold text-5xl text-pretty uppercase mb-10 flex items-center justify-center gap-x-2">
        <TitleIcon cn="h-9" />
        <span className="border-b border-[#38bdf8] md:text-5xl text-3xl uppercase font-bold md:text-left text-center flex items-center md:justify-start justify-center gap-x-2 ">
          Habilidades
        </span>
      </h1>

      <div className=" flex flex-wrap items-center justify-around py-4 gap-5 ">
        {devImages.map((img) => {
          return (
            <div
              key={img.textAlt}
              className="relative flex justify-center  mx-auto md:mb-0  items-center  "
            >
              <div className=" flex flex-col items-center z-50 md:p-8 p-6 uppercase text-slate-300 ">
                <h1 className="text-base font-bold">
                  {img.title}
                </h1>
                {img.icon}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
