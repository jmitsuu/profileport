import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Container } from './layout/Container';
function App() {
  return (
    <main className=" min-h-screen bg-black dark:bg-slate-200 ">
      <div className=" h-full bg-tecHeavy dark:bg-white flex flex-col relative  border-x-[0.1em] border-tecMedium md:w-[1300px] mx-auto min-h-screen  ">
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
