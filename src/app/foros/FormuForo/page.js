import {Button} from '@nextui-org/button'; 
import React from "react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

export default function Page() {
    return (
      <div class="flex w-full flex-col mx-0 overflow-y-scroll h-full bg-indigo-100">

        <div className="flex flex-row w-full my-6 mx-5 px-2">
        <h1 className='font-semibold text-3xl'>NUEVO TEMA</h1>
        </div>

        <div className="flex flex-row w-full my-6 mx-5 px-2">
            <form class="w-full">
                <div className="flex flex-row w-full my-6 mx-5 px-2">
                    <div className="bg-indigo-900 text-white flex flex-row justify-center items-center w-1/6">
                    <p>Tema: </p>
                    </div>
                    <div className='flex flex-row w-full justify-start items-start '>
                        <Input color="secondary" type='text' className='input' placeholder="Nombre del tema"></Input>
                    </div>
                    <div className='flex flex-row w-1/12 justify-end items-end mr-4'>
                    </div>
                </div>
                <div className="flex flex-row w-full my-6 mx-5 px-2">
                    <div class="bg-indigo-900 text-white flex flex-row justify-center items-center w-1/6">
                    <h1 >descripcion: </h1>
                    </div>
                    <div className='flex flex-row w-full justify-start items-start '>
                        <Textarea color="secondary" placeholder="Descripcion o pregunta del tema" ></Textarea>
                    </div>
                    <div className='flex flex-row w-1/12 justify-end items-end mr-4'>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center mr-7 ">
                    <Button color="primary">Publicar</Button>
                </div>
            </form>
        </div>

      </div>
  )
}
  
  