interface typeContent {
  title: string;
  subtitle?: string;
  content: string;
}
//38bdf8
export function Content({
  title,
  content,
  subtitle,
}: typeContent) {
  return (
    <main className=" w-full z-50  md:mb-10 mx-auto lg:flex justify-between">
      <div className="lg:w-[800px] text-balance md:text-left text-center mt-20">
        <h2 className="text-[#38bdf8] text-xl">
          {' '}
          {title}
        </h2>
        <h1 className="text-white  dark:text-tecHeavy z-50 font-bold md:text-6xl text-4xl ">
          {subtitle}
        </h1>
        <p className="text-slate-400 dark:text-tecMedium mt-5 lg:text-3xl text-xl ">
          {content}
        </p>
      </div>
    </main>
  );
}
