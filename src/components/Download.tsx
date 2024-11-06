import { IoArrowDown } from 'react-icons/io5';

export function Download() {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1KOpnKQNc35JVGGhB6eCca6Y_ONmvfdk6"
      className="md:mx-0 mx-auto w-56 text-[#38bdf8]  dark:text-tecHeavy  py-2 rounded-lg flex items-center justify-center gap-2  md:mt-24 mt-8 border border-[#38bdf8] transition-all hover:bg-tecMediumLight/10 dark:bg-tecLight uppercase "
    >
      Baixar Currículo <IoArrowDown />
    </a>
  );
}
