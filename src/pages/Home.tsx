import { Content } from '../components/Content';
import { AboutMe } from '../components/AboutMe';
import { Skills } from '../components/Skills';
import { SocialMedia } from '../components/SocialMedia';

export function Home() {
  return (
    <section className="mt-10 h-full w-full pb-10 m-y-5">
      <div className="md:w-36 md:h-36 flex justify-center items-center border-2 border-tecMediumLight dark:border-tecHeavy rounded-full bg-slate-300">
        <img
          alt="profile"
          className=" rounded-full w-full h-full"
          width={144}
          height={144}
          src="https://avatars.githubusercontent.com/u/78458400?s=400&u=f3472c0310230a7b10a44d530d0e1de1c88d59a5&v=4"
        />
      </div>
      <Content
        title={
          'Analise e Desenvolvimento de Sistemas'
        }
        content={`Ola! eu sou o Jairo, criei esse portfólio para compartilhar alguns projetos desenvolvidos até o momento. Caso queiram realizar contato ou deixar sua sugestão sobre algo, minhas redes sociais estão logo abaixo.`}
      />
      <SocialMedia />
      <Skills />

      <div className="w-full h-full flex justify-between relative">
        <AboutMe />
      </div>
    </section>
  );
}
