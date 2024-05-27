"use client";
import React from "react";
import { Button } from "@nextui-org/react"; 
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import {Areas} from "./Areas";
import { Select, SelectItem } from "@nextui-org/react";

export default function Page() {

    return (
        <div className="flex w-full flex-col mx-0 overflow-y-scroll h-full bg-indigo-100">
            <div className="flex flex-row w-full my-6 mx-5 px-2">
                <h1 className="font-semibold text-3xl">NUEVO GRUPO</h1>
            </div>

            <div className="flex flex-row w-full my-6 mx-5 px-2">
                <form className="w-full">
                    <div className="flex flex-row w-full my-6 mx-5 px-2">
                        <div className="bg-indigo-900 text-white flex flex-row justify-center items-center w-1/6">
                            <p>Titulo: </p>
                        </div>
                        <div className="flex flex-row w-full justify-start items-start">
                            <Input color="secondary" type="text" className="input" placeholder="Titulo del grupo"></Input>
                        </div>
                        <div className="flex flex-row w-1/12 justify-end items-end mr-4"></div>
                    </div>
                    <div className="flex flex-row w-full my-6 mx-5 px-2">
                        <div className="bg-indigo-900 text-white flex flex-row justify-center items-center w-1/6">
                            <h1>Descripcion: </h1>
                        </div>
                        <div className="flex flex-row w-full justify-start items-start">
                            <Textarea color="secondary" placeholder="Descripcion del grupo"></Textarea>
                        </div>
                        <div className="flex flex-row w-1/12 justify-end items-end mr-4"></div>
                    </div>
                    <Select items={Areas} label="Seleccionar un area " className="w-1/2 mx-5 px-2" placeholder="Eliga el area" color="secondary">
                        {Areas.map(area => (<SelectItem key={area.value} value={area.value}>{area.label}</SelectItem>))}
                    </Select>
                    
                    <div className="flex w-full justify-center items-center mr-7 my-4">
                        <Button color="primary">Publicar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
