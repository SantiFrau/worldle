import Input from "./components/input";
import Palabra from "./components/palabra";
import Win from "./components/win";
export default function App(){

  return(
    <>
    <div className="bg-black w-full h-screen flex flex-col items-center justify-center">
      
      <div className="bg-zinc-800 rounded-lg p-5 flex flex-col items-center justify-center shadow-g">
      <Palabra></Palabra>
    <Input></Input>

      </div>
    
    <Win></Win>
    </div>

    </>
    
  )
}