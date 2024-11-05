export default function RouterLink() {
  const routeLink = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/skills',
      title: 'Skills',
    },
    {
      path: '/projects',
      title: 'Projetos',
    },
    {
      path: '/contact',
      title: 'Contato',
    },
  ];
  return { routeLink };
}
