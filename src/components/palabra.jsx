import { useEffect, useState } from 'react';
import { useGlobalState } from "./state"
import { palabras } from '../data/palabras';

export default function Palabra() {
    const { palabra, palabraEscondida ,setEncontradas ,setWin,encontradas,setReset,setPalabraEscondida,reset} = useGlobalState();
    const [sections, setSections] = useState([]);
    const letras = palabraEscondida.split('');
    

    //efecto para actualizar el turno actual
    useEffect(() => {
      
        if(sections.length<=5){
            if(!encontradas.every(e => e===1)){
                
                agregarSection();
            }
            
        }
       
    }, [palabra]);
   

    //useefect para actualizar el componente win cada vez que cambie las letras encontradas
    useEffect(()=>{

        if(sections.length<=5){
            if(encontradas.every(e => e===1)){
                setWin(1);
                
            }
        }else{
            setWin(2)
        }

    },[encontradas])

    //efecto para el reset cada vez que se aprete el reset se setean los estados 
  useEffect(()=>{
    const numeroRandom= Math.floor(Math.random() * 200)
    setReset(false);
    setPalabraEscondida(palabras[numeroRandom])
    setSections([])
    setEncontradas(Array.from({ length: palabras[numeroRandom].length }, () => 0))
  },[reset])
    

    const agregarSection = () => {

        const nuevaSection = (

            <section key={sections.length} className="flex flex-row gap-2 items-center justify-center w-full h-max">
                {palabra.split('').map((c, i) => {
                    const ocurrencia = palabraEscondida[i].toLowerCase() == c.toLowerCase();
                    const ocurrencia2 =letras.includes(c);
                    
                    if(ocurrencia) {
                        setEncontradas(prevEncontradas => {
                            const nuevasEncontradas = [...prevEncontradas]; // Copiar el array original
                            nuevasEncontradas[i] = 1; // Establecer el índice especificado como 1
                            return nuevasEncontradas; // Devolver el nuevo array actualizado
                        });
                    }
                 


                    return (
                        <div key={i} className={`flex shadow-w items-center justify-center w-12 h-12 rounded-lg ${ocurrencia ? "bg-green-400" : ((ocurrencia2) ? "bg-amber-400" : "bg-zinc-300")}`}>
                            <p className={`text-center font-bold`}>
                                {c}
                            </p>
                        </div>
                    );
                })}
            </section>
        );
        setSections(prevSections => [...prevSections, nuevaSection]);
    };

  

    return (
        <div className=' w-full h-max flex flex-col gap-5 p-10'>
            <h3 className='w-full text-center text-white text-xl font-bold'>
                Palabra de {palabraEscondida.length} letras
            </h3>
            {sections}
        </div>
    );
}