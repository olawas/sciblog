"use client";
import {Listbox, ListboxItem} from "@nextui-org/react";
import { useRouter } from 'next/navigation';

const LeftMenu = ({className, options, getOptionIcon, getOptionLabel=val=>val, getOptionKey=val=>val}) => {
  const router = useRouter();
  return (
    <div className={className}>
      <Listbox
        aria-label="Actions"
        onAction={(key) => router.push(key)}
        className="p-4"
      >
        {
          options.map(
            option=>(
              <ListboxItem key={getOptionKey(option)}>
                <div className="flex flex-row space-x-2 justify-start items-center">
                  {getOptionIcon&&getOptionIcon(option)}
                  <div>{getOptionLabel(option)}</div>
                </div>
                
              </ListboxItem>
            )
          )
        }
      </Listbox>
    </div>
  )
}

export default LeftMenu