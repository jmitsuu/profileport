import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
function App() {
  return (
    <main className="h-full w-full bg-black dark:bg-slate-200 ">
      <div className=" bg-tecHeavy dark:bg-white container border-x-[0.1em] border-slate-800 md:w-[1300px] mx-auto min-h-screen px-10">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}

export default App;
