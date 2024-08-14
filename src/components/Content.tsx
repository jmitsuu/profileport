interface typeContent {
  title: string;
  content: string;
}
export function Content({
  title,
  content,
}: typeContent) {
  return (
    <main className="md:w-[980px] w-full  md:mb-10">
      <h1 className="text-white  my-10  dark:text-tecHeavy font-bold md:text-[3rem] text-3xl text-pretty ">
        {title}
      </h1>
      <p className="text-tecLight dark:text-tecMedium mt-5 md:text-2xl text-xl">
        {content}
      </p>
    </main>
  );
}
