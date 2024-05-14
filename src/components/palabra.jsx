import { useEffect, useState } from 'react';
import { useGlobalState } from "./state"

export default function Palabra() {
    const { palabra, palabraEscondida ,setEncontradas ,setWin,encontradas} = useGlobalState();
    const [sections, setSections] = useState([]);
    const letras = palabraEscondida.split('');
    
    useEffect(() => {
      
        if(sections.length<=5){
            if(encontradas.every(e => e===1)){
                setWin(1);
                
            }else{
                agregarSection();
            }
            
        }else{
            setWin(2)
        }
       
    }, [palabra]);

    

    

    const agregarSection = () => {

        const nuevaSection = (

            <section key={sections.length} className="flex flex-row gap-2 items-center justify-center w-full h-max">
                {palabra.split('').map((c, i) => {
                    const ocurrencia = palabraEscondida[i] == c;
                    const ocurrencia2 =letras.includes(c);
                    
                    if(ocurrencia) {
                        setEncontradas(prevEncontradas => {
                            const nuevasEncontradas = [...prevEncontradas]; // Copiar el array original
                            nuevasEncontradas[i] = 1; // Establecer el índice especificado como 1
                            return nuevasEncontradas; // Devolver el nuevo array actualizado
                        });
                    }
                 


                    return (
                        <div key={i} className={`w-12 h-12 rounded-lg ${ocurrencia ? "bg-green-400" : ((ocurrencia2) ? "bg-amber-400" : "bg-zinc-300")}`}>
                            <p className={` w-full h-full text-center`}>
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
        <div className=' w-2/3 h-max flex flex-col gap-2 p-10'>
            <h3 className='w-full text-center text-white text-xl font-bold'>
                Palabra de {palabraEscondida.length} letras
            </h3>
            {sections}
        </div>
    );
}