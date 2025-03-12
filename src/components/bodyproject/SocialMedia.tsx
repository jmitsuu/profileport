import { Social } from '../../utils/Social';

export function SocialMedia() {
  return (
    <div className="flex gap-5 md:mb-20 mb-10 mt-2 mx-auto ">
      {Social.map((icon) => {
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
