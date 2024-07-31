import dev1 from '../assets/images/dev/dev1.jpg';
import dev2 from '../assets/images/dev/dev2.jpg';
import dev3 from '../assets/images/dev/dev3.jpg';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

const devImages = [
  {
    textAlt: 'dev-1',
    img: dev1,
    title: 'ReactJS',
    icon: <FaReact className="h-10 w-10 text-blue-300" />,
  },
  {
    textAlt: 'dev-2',
    img: dev2,
    title: 'VueJS',
    icon: <FaVuejs className="h-10 w-10 text-green-300" />,
  },
  {
    textAlt: 'dev-3',
    img: dev3,
    title: 'JavaScript',
    icon: <IoLogoJavascript className="h-10 w-10 text-yellow-300" />,
  },
];
export function Skills() {
  return (
    <div className="transition-all my-20 ">
      <h1 className="text-white dark:text-tecHeavy font-bold text-[2rem] text-pretty uppercase mb-10">
        Habilidades
      </h1>

      <div className=" md:flex items-center justify-around py-4  transition-all  gap-5 ">
        {devImages.map((img) => {
          return (
            <div
              key={img.textAlt}
              className="relative flex justify-center  items-center md:h-72 md:w-96  bg-black rounded-3xl "
            >
              <img
                className="w-full h-full rounded-3xl  blur-sm cursor-pointer  "
                alt={img.textAlt}
                src={img.img}
              />
              <div className="md:text-2xl font-bold absolute rounded-3xl justify-center flex flex-col items-center  z-50 md:p-8 uppercase bg-black/70 text-slate-300 ">
                {img.icon}
                <h1>{img.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
