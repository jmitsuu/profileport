import { Content } from '../components/Content';
import { AboutMe } from '../components/AboutMe';
import { Skills } from '../components/Skills';
import { SocialMedia } from '../components/SocialMedia';

export function Home() {
  return (
    <section className="mt-10 h-full w-full pb-10 m-y-5">
      <div className="md:w-28 md:h-28 rounded-full bg-slate-300">
        <img alt='profile' className='md:w-28 md:h-28 rounded-full' width={112} height={112} src='https://avatars.githubusercontent.com/u/78458400?s=400&u=f3472c0310230a7b10a44d530d0e1de1c88d59a5&v=4' /> 
      </div>
      <Content
        title={
          'What is Lorem Ipsum, Why do we use it Where does it come from'
        }
        content={`Lorem Ipsum has been the industry s standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.`}
      />
      <SocialMedia />
      <Skills />

      <div className="w-full h-full flex justify-between relative">
        <AboutMe />
      
      </div>
    </section>
  );
}
