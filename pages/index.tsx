import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { CardItem } from '../components/CardItem'
import { Landing } from '../components/Landing'
import { Navbar } from '../components/Navbar'
import { BigCard } from '../components/BigCard'
import img1 from '../public/imgs/cardImg1.svg';
import img2 from '../public/imgs/cardImg2.svg';
import img3 from '../public/imgs/cardImg3.svg';
import river from '../public/imgs/river.svg'
import mountains from '../public/imgs/mountains.svg'
import beach from '../public/imgs/beach.svg'
import booking from '../public/imgs/booking.svg'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { AccordionCard } from '../components/AccordionCard'
import { Footer } from '../components/Footer'
import { ToTop } from '../components/ToTop'
import { useInView } from 'react-intersection-observer'
import { Alert, AlertTitle } from '@mui/material'
import { useState } from 'react'

const Home: NextPage = () => {

  const pakDesc = 'Pulau Sibandang, sebuah permata tersembunyi di utara Danau Toba, memukau dengan keindahan alamnya. Dikelilingi oleh hamparan hijau perbukitan dan air jernih Danau Toba, serta pantai pasir putih yang memanjang, pulau ini menawarkan suasana santai dan budaya Batak yang kaya. Pesona alamnya yang memikat, mulai dari perbukitan hingga danau yang mempesona, menjadikan Pulau Sibandang tempat untuk pengalaman tak terlupakan yang dipenuhi dengan ketenangan dan keindahan alam.'
  const Map = dynamic(
    ()=> import('../components/Map.jsx') as any, {ssr:false}
  )
  const [showAlert, setShowAlert] = useState(false)

 const heading = useInView({
    threshold:0,
    
    triggerOnce:true
  });
  const cards = useInView({
    threshold:0,
    
    triggerOnce:true,
  })
 const heading1 = useInView({
    threshold:0,
    
    triggerOnce:true
  });
 const heading2 = useInView({
    threshold:0,
    triggerOnce:true
  });
 const bigCard = useInView({
    threshold:0,
    
    triggerOnce:true
  });
 const accordions = useInView({
    threshold:0,
    
    triggerOnce:true
  });
  
  return (
    <div>
      <Head>
        <title>Visit Pulau Sibandang</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/> 
        <meta name="description" content="Keindahan Alami yang Menakjubkan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gradient-to-t from-blue-300 to-blue-50'>
      <Navbar/>
      <Landing/>
      </div>
      <div id='heading' className="bg-[url('../public/imgs/lace.png')] bg-contain h-[80px] w-full " ></div>
      <div  className='my-20'>
        <div ref={heading.ref} className={`${heading.inView ? 'translate-y-[0vh] opacity-1' : 'translate-y-[10vh] opacity-0'} transition-all duration-1000 ease-out `}>
        <h1 className='text-xs lg:text-sm font-heading my-5 text-center w-full tracking-[10px] font-semibold'>Dsfasfsasfafsafsaf</h1>
        <h4 className='text-xs lg:text-sm font-heading my-5 text-center w-full tracking-[10px] font-semibold'>DESTINASI</h4>
        <h3 className='text-3xl lg:text-4xl my-5 tracking-wide w-full text-center capitalize font-extrabold'>Destinasi Wisata Pulau Sibandang</h3>
        </div>
        <Map/>
        <div id='tours' ref={cards.ref} className={`flex flex-wrap justify-center transition-all duration-[1500ms] ease-out ${cards.inView ? 'opacity-100' : 'opacity-0'} `}>
        <CardItem icon={<EmojiEmotionsIcon />} modalDesc={pakDesc} title='Pengalaman' desc='Keindahan Alami yang Menakjubkan' img={img1} />
        <CardItem icon={<SelfImprovementIcon />} modalDesc={pakDesc} title='Santai' desc='Atmosfer Budaya yang Tenang' img={img2} />
        <CardItem icon={<LandscapeIcon />} modalDesc={pakDesc} title='Pesona' desc='Pesona Keindahan Alam yang Memikat' img={img3} />
        </div>
      </div>
      <div className='mt-40 relative'>
        <div ref={heading1.ref} className={`transition-all duration-[1000ms] ease-out ${heading1.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'} `} >
        <h4 className='text-xs lg:text-sm font-heading my-10 text-center w-full tracking-[10px] font-semibold'>HOMESTAY</h4>
        <h3 className='text-3xl lg:text-4xl my-10 tracking-wide w-full text-center capitalize font-extrabold'>Homestay Terbaik Pulau Sibandang</h3>
        </div>
        <div className="flex flex-wrap justify-center mt-[150px]">
        <div ref={bigCard.ref} className={`transition-all duration-1000 ${bigCard.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <BigCard/>
        </div>
        <div id='guide' ref={accordions.ref} className={`flex flex-col transition-all duration-[2000ms] ease-in-out ${accordions.inView ? 'translate-y-[0vh] opacity-100' : 'translate-y-[20vh] opacity-0'} `}>
        <AccordionCard title={'Homestay Sampuran'} price={'250000'} desc={'Homestay ini menawarkan pengalaman menginap yang autentik dan dekat dengan kehidupan lokal di Pulau Sibandang.'} img={mountains}   />
        <AccordionCard title={'Homestay Erly'} price={'250000'} desc={'Penginapan ramah keluarga dengan pemandangan alam yang menakjubkan'} img={beach}   />
        <AccordionCard title={'Homestay Pak Theresia'} price={'250000'} desc={'Akomodasi yang hangat dan menyenangkan di tengah pulau'} img={river}   />
        </div>
        </div>
        <div className='flex justify-center md:flex-row flex-col mt-20 mb-10 mx-10'>
        <form id='form' action="https://api.whatsapp.com/send" method="GET" target="_blank" ref={heading2.ref} className={`flex flex-col items-start min-w-[300px] transition-all duration-[1500ms] ${heading2.inView ? 'opacity-100' : 'opacity-0'}`}>
            <h4 className='text-xs lg:text-sm mt-10 mb-5 font-heading w-full tracking-[10px] font-semibold'>HUBUNGI KAMI</h4>
            <h3 className='text-3xl lg:text-4xl mb-10 tracking-wide w-full capitalize font-extrabold'>Pesan Tur Bersama Kami Sekarang</h3>
            <p className='max-w-[400px]'>Mencari pengalaman yang belum pernah dirasakan sebelumnya? Pesan tur Anda bersama kami hari ini.</p>
            <input required type="text" placeholder='Name' className='px-4 py-2 transition-all  text-black shadow-md w-full rounded-2xl placeholder-italic focus:outline-none border-2 border-transparent hover:border-primary focus:border-primary bg-stone-100 my-4 mt-10' name="phone" />
            <input required type="hidden" name="phone" value="6281376821631" />
            <input required type="hidden" name="text" value="Halo" />
            <input required type="date" placeholder='Preferred date' className='px-4 py-2 transition-all  text-black shadow-md w-full rounded-2xl placeholder-italic focus:outline-none border-2 border-transparent hover:border-primary focus:border-primary bg-stone-100 my-4 ' />
            <input required type="email" placeholder='Email' className='px-4 py-2 transition-all  text-black shadow-md w-full rounded-2xl placeholder-italic focus:outline-none border-2 border-transparent hover:border-primary focus:border-primary bg-stone-100 my-4' />
            <button type="submit" className='my-4 px-6 py-2 rounded-2xl bg-secondary hover:bg-secondaryLighter text-white font-medium'>Submit</button> 
            <Alert className={`w-full ${showAlert ? 'block' : 'hidden'}`} severity="success">
                <AlertTitle>Success</AlertTitle>
                Your booking has been made - <strong>We will contact you soon.</strong>
            </Alert>
        </form>
                  <Image height={1000} src={booking}/>
        </div>
        <ToTop/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home