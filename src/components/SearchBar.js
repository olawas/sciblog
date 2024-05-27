import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link'; // Importa Link de Next.js

const SearchBar = ({ className }) => {
  return (
    <div className={className}>
      <div className='w-full h-10 flex flex-row'>
        <input type='text' placeholder='Busqueda'className='w-full dark:text-gray-950 dark:bg-violet-100 py-5 px-3 inset-primary-bg outline outline-1 outline-violet-800 rounded-l-md' />
        <Link href="/buscar">
          <button className='h-full bg-primary-bg outline outline-1 outline-violet-800 rounded-r-md cursor-pointer'>
            <MagnifyingGlassIcon className='h-full text-on-primary p-1' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SearchBar;
