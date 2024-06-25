import React, { useEffect, useRef } from 'react';
import img from '../public/imgs/pak_map1.png';
import CloudIcon from '@mui/icons-material/Cloud';
import { useInView } from 'react-intersection-observer';

type Props = {}

export const Landing = (props: Props) => {
  const heading = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const offset = window.pageYOffset;
        imgRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='flex flex-col mx-2 sm:mx-5 lg:mx-[10%] xl:[15%] 2xl:[18%]'>
        <div ref={heading.ref} className={`flex flex-col transition-all duration-[2000ms] ${heading.inView ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className='font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold md:text-left text-center pt-20 pb-10'>Pulau Sibandang</h1>
          <p className='w-full px-10 md:px-0 md:max-w-[450px] text-sm font-medium text-primary/70 leading-7 my-5 md:text-justify text-center'>Pulau Sibandang di Danau Toba menghadirkan pesona alami yang menawan, hamparan indah, dan ketenangan yang memukau.</p>
          <button className='md:self-start w-fit py-2 hover:scale-110 transition-all px-6 text-sm md:text-md lg:text-lg rounded-2xl my-5 bg-secondary border-2 border-white hover:bg-secondaryLighter text-white font-medium'><a href="#heading">Visit Now</a></button>
        </div>
      </div>
      <div className='w-full mt-150' ref={imgRef} style={{ height: '500px', backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      </div>
    </>
  )
}
