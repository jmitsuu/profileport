interface typeContent {
  title: string;
  content: string;
}
export function Content({
  title,
  content,
}: typeContent) {
  return (
    <main className="md:w-[980px] w-full z-50  md:mb-10">
      <h1 className="text-white  my-10  dark:text-tecHeavy z-50 font-bold md:text-7xl text-4xl md:text-left text-center">
        {title}
      </h1>
      <p className="text-tecLight dark:text-tecMedium mt-5 md:text-2xl text-xl ">
        {content}
      </p>
    </main>
  );
}
