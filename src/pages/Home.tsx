import { Content } from '../components/Content';
import { AboutMe } from '../components/AboutMe';
import { useEffect, useState } from 'react';
import homeimg from '../assets/images/dev/homeimg.png';

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
      <div className="pb-40 mx-auto lg:flex justify-between items-center">
        <Content
          title={'Desenvolvedor Front-End.'}
          subtitle={'Jairo Miguel'}
          content={`Ola! criei esse portfólio para compartilhar alguns projetos desenvolvidos até o momento. Caso queiram realizar contato ou deixar sua sugestão sobre algo, minhas redes sociais estão logo abaixo.`}
        />
           <img
        src={homeimg}
        alt="dev img"
        width={444}
        height={444}
        className="lg:w-[500px] lg:h-full"
      />
      </div>
      <div className="w-full h-full flex justify-between relative">
        <AboutMe />
      </div>
    </section>
  );
}
