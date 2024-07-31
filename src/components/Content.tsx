interface typeContent {
  title: string;
  content: string;
}
export function Content({ title, content }: typeContent) {
  return (
    <main className="md:w-[880px]  my-10 ">
      <h1 className="text-white dark:text-tecHeavy font-bold text-[3rem] text-pretty ">
        {title}
      </h1>
      <p className="text-tecLight dark:text-tecMedium mt-5 text-xl text-pretty">
        {content}
      </p>
    </main>
  );
}
