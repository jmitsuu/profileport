import { inView, animate } from 'motion';

const whoAmIAnimation = () => {
  const whoAmICard = document.querySelectorAll(
    '.whoAmICard',
  );
  inView(whoAmICard, () => {
    animate(
      whoAmICard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: [
          'translateX(-100px) ',
          'none',
        ],
      },
      { duration: 0.5, delay: 0.1 },
    );
  });
};
const ImageAnimation = () => {
  const verticalImage = document.querySelectorAll(
    '.verticalImage',
  );

  inView(verticalImage, () => {
    animate(
      verticalImage,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: [
          'translateX(100px) ',
          'none',
        ],
      },
      { duration: 0.5, delay: 0.2 },
    );
  });
};
const cardProject = () => {
  const cardProject = document.querySelectorAll(
    '.cardProject',
  );

  inView(cardProject, () => {
    animate(
      cardProject,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: [
          'translateY(100px) ',
          'none',
        ],
      },
      { duration: 0.5, delay: 0.2 },
    );
  });
};
const cardEducation = () => {
  const cardEducation = document.querySelectorAll(
    '.cardEducation',
  );

  inView(cardEducation, () => {
    animate(
      cardEducation,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: [
          'translateY(-100px) ',
          'none',
        ],
      },
      { duration: 0.5, delay: 0.2 },
    );
  });
};
export default {
  whoAmIAnimation,
  ImageAnimation,
  cardProject,
  cardEducation
};
