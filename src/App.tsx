import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
function App() {
  return (
    <main className=" min-h-screen bg-black dark:bg-slate-200 ">
      <div className=" h-full bg-tecHeavy dark:bg-white flex flex-col container border-x-[0.1em] border-tecMedium md:w-[1300px] mx-auto min-h-screen  px-10">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}

export default App;
