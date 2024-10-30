import { FiInstagram } from 'react-icons/fi';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import {
  FaWhatsapp,
  FaGithub,
} from 'react-icons/fa6';
const social = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/jairomiiguel/',
    icon: (
      <FiInstagram className="h-6 w-6 text-tecLight dark:text-tecMedium" />
    ),
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jairo-miguel-703121146/',
    icon: (
      <PiLinkedinLogoBold className="h-6 w-6 text-tecLight dark:text-tecMedium " />
    ),
  },
  {
    name: 'WhatsApp',
    link: 'https://wa.me/5548998663238',
    icon: (
      <FaWhatsapp className="h-6 w-6 text-tecLight dark:text-tecMedium" />
    ),
  },
  {
    name: 'Github',
    link: 'https://github.com/jmitsuu/',
    icon: (
      <FaGithub className="h-6 w-6 text-tecLight dark:text-tecMedium" />
    ),
  },
];
export function SocialMedia() {
  return (
    <div className="flex gap-5 md:mb-20 mb-10 mt-10 mx-auto ">
      {social.map((icon) => {
        return (
          <a
            key={icon.link}
            href={icon.link}
            aria-label={`${icon.name}`}
            target="blank"
          >
            {icon.icon}
          </a>
        );
      })}
    </div>
  );
}
