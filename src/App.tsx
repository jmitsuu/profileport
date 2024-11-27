import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Container } from './layout/Container';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { AboutMe } from './pages/AboutMe';
import { Skills } from './components/Skills';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const elemento = document.getElementById(
        location.hash.replace('#', ''),
      );
      console.log(elemento);
      if (elemento) {
        elemento.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  return (
    <main className=" min-h-screen bg-gradient-radial from-70% from-tecHeavy via-100% via-tecMedium to-tecHeavy dark:bg-white">
      <div className=" h-full flex flex-col relative   container  mx-auto min-h-screen  ">
        <Header />
        <Container>
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
        </Container>
        <Footer />
      </div>
    </main>
  );
}

export default App;
