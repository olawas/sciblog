import { MoonIcon } from "@/assets/MoonIcon";
import { SunIcon } from "@/assets/SunIcon";
import {Switch} from "@nextui-org/react";
import { useEffect, useState, useContext} from "react";
import {Context} from '@/contexts/MainContext'
export default function ThemeSwitch() {
  const { theme, setContextTheme} = useContext(Context)
  const [currentTheme, setTheme] = useState(theme)
  useEffect(
    ()=> {
      setContextTheme(currentTheme)
      localStorage.setItem('theme', currentTheme)
    }
  ,[currentTheme])
  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      isSelected={theme=='light'}
      onValueChange={(val)=> val ?  setTheme('light'): setTheme('dark')}
    >
      { currentTheme == 'light' ? 'Claro' : 'Oscuro'}
    </Switch>
  );
}
