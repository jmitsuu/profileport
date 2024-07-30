import tivit from '../assets/images/icons/tivit.png';
import tracetec from '../assets/images/icons/tracetec.jpg';
import { PiBagSimpleFill } from 'react-icons/pi';
import { IoArrowDown } from 'react-icons/io5';
const jobs = [
  {
    company: 'Tivit Telecomunicações',
    icon: tivit,
    initDate: '2013',
    endDate: '2014',
    role: 'Tele-Atendimento',
  },
  {
    company: 'Trace Log Rastreamento e Monitoramento',
    icon: tracetec,
    initDate: '2014',
    endDate: '2022',
    role: 'Operador de Sistemas',
  },
  {
    company: 'Trace Tecnologia e Gestão de Frotas',
    icon: tracetec,
    initDate: '2022',
    endDate: '2024',
    role: 'Assistente de Programação',
  },
  {
    company: 'Trace Tecnologia e Gestão de Frotas',
    icon: tracetec,
    initDate: '2024',
    endDate: '2024',
    role: 'Desenvolvedor Front End Jr',
  },
];
export function Jobs() {
  return (
    <div className="md:w-[430px] border border-tecMedium px-5 py-10 rounded-2xl  mt-20 ">
      <div className="flex items-center ">
        <PiBagSimpleFill className="w-8 h-8 mr-2 text-tecSuperLight dark:text-tecHeavy" />
        <h1 className=" text-tecSuperLight dark:text-tecHeavy border-b border-tecSuperLight dark:border-tecHeavy  font-bold text-2xl">
          Trabalhos
        </h1>
      </div>
      {jobs.map((work) => {
        return (
          <ol key={work.role} className="mt-6 space-y-6 ">
            <li className="flex gap-6 ">
              <div className="flex relative   w-10 h-10 mt-1 flex-none items-center justify-center">
                <img
                  src={work.icon}
                  alt="img"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <dl className=" flex flex-auto flex-wrap gap-x-2 ">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-md font-bold text-tecLight dark:text-tecHeavy">
                  {work.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-sm  text-tecLight dark:text-tecHeavy">
                  {work.role}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500 ">
                  <time dateTime="2013">{work.initDate}</time>
                  <span aria-hidden="true">-</span>
                  <time dateTime="2014">{work.endDate}</time>
                </dd>
              </dl>
            </li>
          </ol>
        );
      })}
      <div className="m-auto flex mt-10 bg-tecMedium hover:bg-tecMediumLight/10 dark:bg-tecLight w-full rounded-xl ">
        <button className=" w-full h-full text-tecLight  dark:text-tecHeavy  py-2 rounded-2xl flex items-center justify-center gap-2">
          Download CV <IoArrowDown />
        </button>
      </div>
    </div>
  );
}