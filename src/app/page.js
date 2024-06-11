"use client";
import MiniPost from '@/components/MiniPost';
import PostCarousel from '@/components/PostCarousel';
import PreviewPost from '@/components/PreviewPost';
import SearchBar from '@/components/SearchBar';
import ThemeSwitch from '@/components/ThemeSwitch';
import {Button} from '@nextui-org/button'; 
import DailyPost from '../components/DailyPost';
import Link from 'next/link'; // Importa Link de Next.js




export default function Home() {

  return (
    <main className="w-full h-full overflow-y-scroll">
      <div className='flex flex-col text-on-secondary'>
        <div className='flex flex-row w-full my-6 mx-2 px-2'>
          <div className='flex w-full justify-start items-start'>
            <Link href="/agregarPublicacion">
              <Button color="primary"
              >Nueva publicación</Button>
            </Link>
          </div>            
          <div className='flex flex-col w-full justify-center space-y-4 items-center'>
            <h1 className='font-semibold text-3xl'>Buscar</h1>
            <SearchBar className='w-full'/>
          </div>
          <div className='flex flex-row w-full justify-end items-start mr-4'>
           
          </div>
        </div>
        <div className='w-full justify-center flex flex-row'>
          <PostCarousel className="w-4/5"/>
        </div>
        <div className='flex flex-col w-full justify-center space-y-4 items-center'>
          <div className='p-8 w-4/5 space-y-4'>
            <h2 className='font-semibold text-3xl'>Últimos artículos</h2>
            <PreviewPost className="w-full"/>
            <PreviewPost className="w-full"/>
          </div>
        </div>
        <div className='flex flex-col w-full justify-center space-y-4 items-center'>
          <div className='p-8 w-4/5 space-y-4'>
            <h2 className='font-semibold text-3xl'>Post recomendado del día</h2>
          </div>
          <DailyPost className="w-5/6"/>
        </div>
      </div>
    </main>
  )
}
