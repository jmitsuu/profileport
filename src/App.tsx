import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Container } from './layout/Container';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { AboutMe } from './components/AboutMe';
function App() {
  return (
    <main className=" min-h-screen bg-gradient-radial from-70% from-tecHeavy via-100% via-tecMedium to-tecHeavy dark:bg-white">
      <div className=" h-full flex flex-col relative   container  mx-auto min-h-screen  ">
        <Header />
        <Container>
          <Home />
          <AboutMe />
          <Projects />
        </Container>
        <Footer />
      </div>
    </main>
  );
}

export default App;
