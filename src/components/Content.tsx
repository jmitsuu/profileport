interface typeContent {
  title: string;
  content: string;
}
export function Content({
  title,
  content,
}: typeContent) {
  return (
    <main className="lg:w-[980px] w-full z-50  md:mb-10 mx-auto">
      <div className="md:w-36 md:h-36 w-44 h-44 flex justify-center items-center lg:mx-0 mx-auto border-2 border-tecMediumLight dark:border-tecHeavy rounded-full bg-slate-300">
        <img
          alt="profile"
          className=" rounded-full w-full h-full"
          width={144}
          height={144}
          src="https://avatars.githubusercontent.com/u/78458400?s=400&u=f3472c0310230a7b10a44d530d0e1de1c88d59a5&v=4"
        />
      </div>
      <h1 className="text-white  my-10  dark:text-tecHeavy z-50 font-bold md:text-5xl text-4xl md:text-left text-center">
        {title}
      </h1>
      <p className="text-tecLight dark:text-tecMedium mt-5 mlg:text-2xl text-xl ">
        {content}
      </p>
    </main>
  );
}
