import dev1 from '../assets/images/dev/dev1.jpg';
import dev2 from '../assets/images/dev/dev2.jpg';
import dev3 from '../assets/images/dev/dev3.jpg';

const devImages = [
  {
    textAlt: 'dev-1',
    img: dev1,
  },
  {
    textAlt: 'dev-2',
    img: dev2,
  },
  {
    textAlt: 'dev-3',
    img: dev3,
  },
];
export function Skills() {
  return (
    <div className="">
      <h1 className='text-white dark:text-tecHeavy font-bold text-[2rem] text-pretty uppercase mb-10'>Tecnologias</h1>
      <div className="w-full md:flex items-center justify-around py-4 relative  ">
        {devImages.map((img) => {
          return (
            <img
              className="md:h-72 md:w-96 rounded-3xl scale-100 "
              key={img.textAlt}
              alt={img.textAlt}
              src={img.img}
            />
          );
        })}
      </div>
    </div>
  );
}
