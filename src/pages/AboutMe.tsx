import tivit from '../assets/images/icons/tivit.png';
import tracetec from '../assets/images/icons/tracetec.jpg';
import tanimara from '../assets/images/icons/taniamara.jpg';
import unifael from '../assets/images/icons/unifael.jpg';
import { PiBagSimpleFill } from 'react-icons/pi';
import { IoSchoolSharp } from 'react-icons/io5';
import { CardJobsSchool } from '../components/CardJobsSchool';
import { SocialMedia } from '../components/SocialMedia';
import { Download } from '../components/Download';
import { TitleIcon } from '../components/icon/TitleIcon';

const jobs = [
  {
    company: 'Tivit Telecomunicações',
    icon: tivit,
    initDate: '2013',
    endDate: '2014',
    role: 'Tele-Atendimento',
  },
  {
    company:
      'Trace Log Rastreamento e Monitoramento',
    icon: tracetec,
    initDate: '2014',
    endDate: '2022',
    role: 'Operador de Sistemas',
  },
  {
    company:
      'Trace Tecnologia e Gestão de Frotas',
    icon: tracetec,
    initDate: '2022',
    endDate: '2024',
    role: 'Assistente de Programação',
  },
  {
    company:
      'Trace Tecnologia e Gestão de Frotas',
    icon: tracetec,
    initDate: '2024',
    endDate: '2024',
    role: 'Desenvolvedor Front End Jr',
  },
];
const courses = [
  {
    company: 'Tania Mara & Silva Locks',
    icon: tanimara,
    initDate: '0000',
    endDate: '2013',
    role: 'Ensino Médio Completo',
  },
  {
    company: 'UniFael',
    icon: unifael,
    initDate: '2018',
    endDate: '2023',
    role: 'Analise e Desenvolvimento de Sistemas',
  },
];
export function AboutMe() {
  return (
    <section className="w-full min-h-screen  border-t border-[#38bdf8] mt-20" id='about'>
      <div className="w-full lg:flex flex-1 mb-10  pt-20">
        <div className="flex flex-col items-center gap-y-3">
          <div className="rounded-full p-2 border-2 border-[#38bdf8]">
            <img
              src="https://avatars.githubusercontent.com/u/78458400?v=4"
              alt="img github"
              className="w-44 rounded-full"
            />
          </div>
          <h1 className="text-2xl text-slate-300">
            Jairo Miguel
          </h1>
          <SocialMedia />
        </div>
        <div className="md:ml-52 lg:px-0 p-6 flex-col justify-center items-center md:text-left text-center">
          <h1 className="text-slate-300  text-3xl uppercase font-bold md:text-left text-center flex items-center md:justify-start justify-center gap-x-2">
           <TitleIcon cn='h-6' /> Sobre
          </h1>
          <article className="mt-10">
            <p className="text-slate-400 dark:text-tecMedium md:text-2xl">
              Trabalho com tecnologias
              relacionadas ao desenvolvimento
              Front End, desde 2022. Realizei
              especializações em VueJS e ReactJS.
              Trabalhei na area de rastreamento
              veicular, prestava serviços de
              manutenção aos sites e integração de
              api de diversos sistemas.
            </p>
          </article>
        </div>
      </div>
      <div className="md:flex  pt-10 justify-between w-full  dark:border-tecSuperLight px-5 py-10">
        <div className="md:w-[530px]">
          <div className="flex items-center lg:justify-start justify-center">
            <PiBagSimpleFill className="w-8 h-8 mr-2 text-slate-300 dark:text-tecHeavy" />
            <h1 className=" text-slate-300 dark:text-tecHeavy border-b border-[#38bdf8] dark:border-tecHeavy  font-bold text-2xl">
              Trabalhos
            </h1>
          </div>
          {jobs.map((work) => {
            return (
              <CardJobsSchool
                key={work.role}
                role={work.role}
                icon={work.icon}
                company={work.company}
                initDate={work.initDate}
                endDate={work.endDate}
              />
            );
          })}
        </div>
        <div className="md:w-[530px] md:mt-0 my-20">
          <div className="flex items-center lg:justify-start justify-center">
            <IoSchoolSharp className="w-8 h-8 mr-2 text-slate-300 dark:text-tecHeavy" />
            <h1 className=" text-slate-300 dark:text-tecHeavy border-b border-[#38bdf8] dark:border-tecHeavy  font-bold text-2xl">
              Estudos
            </h1>
          </div>
          {courses.map((work) => {
            return (
              <CardJobsSchool
                key={work.role}
                role={work.role}
                icon={work.icon}
                company={work.company}
                initDate={work.initDate}
                endDate={work.endDate}
              />
            );
          })}
          <Download />
        </div>
      </div>
    </section>
  );
}
