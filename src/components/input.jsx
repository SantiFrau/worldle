import { useState } from "react";
import { useGlobalState } from "./state";
import { palabras } from "../data/palabras";

export default function Input(){

    const {setPalabra,palabraEscondida} = useGlobalState()
    const [error , setError] = useState(false);
  const handleclick = (e) =>{
    e.PreventDefault;
    const inputValue = e.target.querySelector('input[type="text"]').value;
    

     console.log(palabraEscondida)

    if (inputValue.length === palabraEscondida.length && palabras.includes(inputValue)) {
        setPalabra(inputValue.toUpperCase());
        e.target.querySelector('input[type="text"]').value="";
        setError(false)
    } else {
        setError(true);
    }
    
  }
   


    return(
        <form action="#" onSubmit={handleclick} className="w-1/2 text-white flex flex-col items-center justify-center gap-3 bg-zinc-900 p-5">
            <input className="w-2/3 bg-zinc-800 " type="text" />
            <input className="cursor-pointer bg-zinc-800 px-7 py-2 rounded-lg" type="submit" value={"Enviar"} />
            <p className={`${error ? "block" : "hidden" } text-red-400 `}>Ingrese una palabra valida</p>
        </form>
    )
}