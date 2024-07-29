interface typeContent {
  title: string;
  content: string;
}
export function Content({ title, content }: typeContent) {
  return (
    <main className="md:w-[800px] mb-20 mt-10 ">
      <h1 className="text-white dark:text-tecHeavy font-bold text-[3rem] text-pretty ">
        {title}
      </h1>
      <h2 className="text-tecLight dark:text-tecMedium text-pretty mt-5 text-[1rem]">
        {content}
      </h2>
    </main>
  );
}
