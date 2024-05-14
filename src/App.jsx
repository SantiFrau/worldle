import { useEffect } from "react";
import { useGlobalState } from "./components/state";
import Input from "./components/input";
import Palabra from "./components/palabra";
import Win from "./components/win";
export default function App(){


 
  const {setPalabraEscondida ,setEncontradas} = useGlobalState();

  




  return(
    <>
    <div className="bg-black w-full h-screen flex flex-col items-center justify-center">
      
    <Palabra></Palabra>
    <Input></Input>

    <Win></Win>
    </div>

    
    </>
    
  )
}