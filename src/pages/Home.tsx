import { Content } from '../components/Content';
import { useEffect, useState } from 'react';
import homeimg from '../assets/images/dev/homeimg.png';
import { Download } from '../components/Download';

export function Home() {
  const [scrollY, setScrollY] =
    useState<number>(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
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
    <section className="mt-10  w-full relative h-screen" id='home'>
      <div className="mx-auto  lg:flex md:justify-between justify-center mt-40">
        <div className="">
          <Content
            title={'Desenvolvedor Front-End.'}
            subtitle={'Jairo Miguel'}
            content={`Ola! criei esse portfólio para compartilhar alguns projetos desenvolvidos até o momento. Caso queiram realizar contato ou deixar sua sugestão sobre algo, minhas redes sociais estão logo abaixo.`}
          />
          <Download />
        </div>
        <img
          src={homeimg}
          alt="dev img"
          width={444}
          height={444}
          className="lg:w-[800px] lg:h-[400px] md:-rotate-6 md:mt-0 mt-10"
        />
      </div>
    </section>
  );
}
