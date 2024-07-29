import { Content } from '../components/Content';
import { Skills } from '../components/Skills';


export function Home() {
  return (
    <section className="mt-10 h-full pb-10 m-y-5">
      <div className="md:w-28 md:h-28 rounded-full bg-slate-300">
        {/* <img alt='profile' src='' />  */}
      </div>
      <Content
        title={
          'What is Lorem Ipsum, Why do we use it Where does it come from'
        }
        content={`Lorem Ipsum has been the industry s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.`}
      />
   <Skills/>
    </section>
  );
}
