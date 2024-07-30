import { FiInstagram } from 'react-icons/fi';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa6';
const social = [
  {
    link: 'a',
    icon: <FiInstagram className="h-6 w-6 text-tecLight dark:text-tecMedium" />,
  },
  {
    link: 'b',
    icon: <PiLinkedinLogoBold className="h-6 w-6 text-tecLight dark:text-tecMedium " />,
  },
  {
    link: 'c',
    icon: <FaWhatsapp className="h-6 w-6 text-tecLight dark:text-tecMedium" />,
  },
];
export function SocialMedia() {
  return (
    <div className="flex   gap-5 mb-20 ">
      {social.map((icon)=>{
        return(
          <a key={icon.link} href={icon.link}>{icon.icon}</a>
        )
      })}
    </div>
  );
}
