"use client";
import TopBar from '@/components/TopBar'
import LeftMenu from '@/components/LeftMenu'
import {HomeIcon, UserCircleIcon, ChatBubbleLeftRightIcon, UserGroupIcon, RectangleGroupIcon, QuestionMarkCircleIcon} from '@heroicons/react/24/solid'

const MainLayout = ({children}) => {
  const options=[
    {
      label: 'Home',
      key: '/',
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      label: 'Perfil',
      key: '/perfil',
      icon: <UserCircleIcon className="h-6 w-6" />,
    },
    {
      label: 'Foros',
      key: '/foros',
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    },
    {
      label: 'Comunidad',
      key: '/comunidad',
      icon: <UserGroupIcon className="h-6 w-6" />,
    },
    {
      label: 'Áreas',
      key: '/areas',
      icon: <RectangleGroupIcon className="h-6 w-6" />,
    },
    {
      label: 'Preguntas frecuentes',
      key: '/faq',
      icon: <QuestionMarkCircleIcon className="h-6 w-6" />,
    }
  ]
  return (
    <div className='flex flex-col w-screen h-screen'>
      <TopBar className="bg-secondary-bg text-on-secondary w-full h-16" options={[]} />
      <div className='flex flex-row w-full h-full bg-background text-on-secondary'>
        <LeftMenu className="bg-primary-bg text-on-primary w-1/5 h-full" options={options} getOptionKey={option=>option.key} getOptionLabel={option=>option.label} getOptionIcon={option=>option.icon}/>
        {children}
      </div>
    </div>
  )
}

export default MainLayout