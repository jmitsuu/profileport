import { IoArrowDown } from 'react-icons/io5';

export function Download() {
  return (
      <a
        href="https://drive.google.com/uc?export=download&id=1zTqwrKFTebBTvG0HQ6mzLLkMR4wJaeYJ"
        className="md:mx-0 mx-auto w-56 text-[#a0cfe0]  dark:text-tecHeavy  flex items-center justify-center gap-2  md:mt-24 mt-8  hover:bg-tecMediumLight/10 dark:bg-tecLight uppercase  bg-gradient-to-br from-tecSuperLight to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-tecHeavy dark:focus:ring-tecHeavy  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 transition duration-700 "
      >
        Baixar Currículo <IoArrowDown />
      </a>
   
  );
}
