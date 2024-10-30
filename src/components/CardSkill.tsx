interface typeCard {
  scroll: number;
  position: string;
  skew: string;
  setScroll: number;
  textAlt?: string;
  img?: string;
  title?: string;
  text?: string;
}
export function CardSkill({
  scroll,
  position,
  skew,
  setScroll,
  textAlt,
  img,
  title,
  text,
}: typeCard) {
  return (
    <section>
      <div
        className={`lg:w-96 lg:h-72 md:w-64 md:h-56 h-64 w-72 text-center    scale-0 transition   duration-700 ${skew} rounded-lg ${scroll > setScroll ? ` ${position} scale-95 ` : 'scale-0 opacity-0'}`}
      >
        <div
          className={`w-full h-full inset-0 bg-black/40 absolute z-50 ${skew} shadow-2xl shadow-black  rounded-lg `}
        ></div>
        <div className="w-full h-full absolute flex justify-center items-center">
          <h1 className="z-50 text-white text-center absolute font-bold lg:text-5xl text-3xl py-10">
            {title}
          </h1>
          <h2>{text}</h2>
        </div>
        <img
          className={`w-full h-full rounded-lg cursor-pointer ${skew}`}
          alt={textAlt}
          src={img}
        />
      </div>
    </section>
  );
}
