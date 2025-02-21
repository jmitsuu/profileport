import { ImMenu } from 'react-icons/im';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import RouterLink from '../../utils/RouterLink';
import { useModelModal } from './model.modal';

export function MenuMobile() {
  const { state, actions } = useModelModal();
  const { routeLink } = RouterLink();
  return (
    <>
      <ImMenu
        onClick={() => {
          actions.setModal(true);
        }}
        className="rounded-md text-[#38bdf8] border-[#38bdf8] border cursor-pointer md:hidden flex float-right text-5xl absolute right-4 top-4"
      />
      <div
        className={`transition-all duration-500 flex justify-center  bg-[#38bdf8] h-72 opacity-90 z-40 fixed right-0 rounded-bl-md ${state.modal ? 'flex w-full' : 'w-[0%]'}`}
      >
        <nav
          className={`px-2 py-2 flex flex-col  justify-center items-center z-50 gap-y-2 ${state.modal ? 'flex opacity-100' : 'hidden opacity-0'}`}
        >
          {routeLink.map((link) => {
            return (
              <NavLink
                onClick={actions.closeModal}
                className={`dark:text-black text-white font-bold lg:uppercase lg:font-bold  text-3xl`}
                style={({ isActive }) => ({
                  color: isActive
                    ? 'text-black'
                    : '',
                })}
                key={link.title}
                to={link.path}
              >
                {link.title}
              </NavLink>
            );
          })}
        </nav>
        <IoMdCloseCircleOutline
          onClick={() => {
            actions.setModal(false);
          }}
          className="absolute bottom-1 left-1 text-4xl text-white cursor-pointer z-50"
        />
      </div>
    </>
  );
}
