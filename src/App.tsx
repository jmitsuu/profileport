import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Container } from './layout/Container';
function App() {
  return (
    <main className=" min-h-screen bg-gradient-radial from-70% from-tecHeavy via-100% via-tecMedium to-tecHeavy dark:bg-white">
      <div className=" h-full flex flex-col relative   2xl:w-[1300px]  w-full mx-auto min-h-screen  ">
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </main>
  );
}

export default App;
