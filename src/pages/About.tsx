export function About() {
  return (
    <section className="flex w-full h-full items-center justify-center mb-10">
      <div>
        <article className="mt-20 space-y-5">
          <h2 className="text-tecSuperLight dark:text-tecHeavy uppercase font-bold md:text-5xl mb-10">
            Sobre mim
          </h2>
          <p className="text-tecLight dark:text-tecMedium md:text-2xl">
            Nascido em Tubarão em 94, nos mudamos
            para Florianópolis onde moro até hoje.
          </p>
          <p className="text-tecLight dark:text-tecMedium md:text-2xl">
            Desde a infancia gostei de jogos e
            computação, onde surgiu o interesse
            pela informática em si.
          </p>
        </article>
        <article className="mt-20 space-y-5">
          <h2 className="text-tecSuperLight dark:text-tecHeavy uppercase font-bold md:text-5xl mb-10">
            Profissional
          </h2>
          <p className="text-tecLight dark:text-tecMedium md:text-2xl">
            Em 2013 entrei para Tivit como
            primeiro emprego, realizava
            atendimento ativo e receptivo. Vendas
            de seguro de vida, cartões..
          </p>
          <p className="text-tecLight dark:text-tecMedium md:text-2xl">
            2014, entrei para Trace Log, empresa
            de rastreamento veicular, onde
            trabalhei como operador de sistemas.
          </p>
          <p className="text-tecLight dark:text-tecMedium md:text-2xl">
            2022, houve mudança de função na
            empresa que antes se chamava Trace Log
            passou a ser Trace Tecnologia, onde
            comecei a entrar na area da
            programação. Realizava manutenções nos
            sites, auxiliava na integração da API
            com a plataforma de rastreamento.
          </p>
        </article>
      </div>
    </section>
  );
}
