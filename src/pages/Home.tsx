import { Content } from '../components/Content';
import { AboutMe } from '../components/AboutMe';
import { SocialMedia } from '../components/SocialMedia';
import { useEffect, useState } from 'react';
import { CardSkill } from '../components/CardSkill';
import dev1 from '../assets/images/dev/dev1.jpg';
import dev2 from '../assets/images/dev/dev2.jpg';
import dev3 from '../assets/images/dev/dev3.jpg';
import dev4 from '../assets/images/dev/dev4.png';
const arraySkills =[
  {
    img:dev2,
    title:"JavaScript"
  },
  {
    img:dev1,
    title:"ReactJS"
  },
  {
    img:dev3,
    title:"VueJs"
  },
  {
    img:dev4,
    title:"TailWindCSS"
  },
]
export function Home() {
  const [scrollY, setScrollY] =
    useState<number>(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    console.log(scrollY);
    window.addEventListener(
      'scroll',
      handleScroll,
    );
    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      );
    };
  }, [scrollY]);
  return (
    <section className="mt-10 h-full w-full pb-10 m-y-5 relative">
     <div className='pb-40 mx-auto flex flex-col'>
      <Content
        title={
          'Analise e Desenvolvimento de Sistemas'
        }
        content={`Ola! criei esse portfólio para compartilhar alguns projetos desenvolvidos até o momento. Caso queiram realizar contato ou deixar sua sugestão sobre algo, minhas redes sociais estão logo abaixo.`}
      />
      <SocialMedia />
     </div>

      <div className="w-full  transition-all relative lg:my-20 mb-72 ">
      <h1 className="text-white text-center    dark:text-tecHeavy font-bold md:text-5xl text-4xl text-pretty uppercase -mt-20">
            Habilidades
          </h1>
        <div className="w-full h-screen flex flex-wrap lg:gap-x-40 gap-y-2 items-center justify-center mt-20">
          {arraySkills?.map((skill)=>{
            return(
              <CardSkill 
              key={skill.title}
              img={skill.img}
              title={skill.title}
              scroll={scrollY}
              setScroll={200}
                   position="opacity-100"
            skew="-skew-y-0"
              />
            )
          })

          }
   
        </div>
      </div>

      <div className="w-full h-full flex justify-between relative">
        <AboutMe />
      </div>
    </section>
  );
}
