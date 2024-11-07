import { FiInstagram } from 'react-icons/fi';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import {
  FaWhatsapp,
  FaGithub,
} from 'react-icons/fa6';
export const Social = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/jairomiiguel/',
    icon: (
      <FiInstagram className="h-6 w-6 text-[#38bdf8] dark:text-tecMedium" />
    ),
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jairo-miguel-703121146/',
    icon: (
      <PiLinkedinLogoBold className="h-6 w-6 text-[#38bdf8] dark:text-tecMedium " />
    ),
  },
  {
    name: 'WhatsApp',
    link: 'https://wa.me/5548998663238',
    icon: (
      <FaWhatsapp className="h-6 w-6 text-[#38bdf8] dark:text-tecMedium" />
    ),
  },
  {
    name: 'Github',
    link: 'https://github.com/jmitsuu/',
    icon: (
      <FaGithub className="h-6 w-6 text-[#38bdf8] dark:text-tecMedium" />
    ),
  },
];