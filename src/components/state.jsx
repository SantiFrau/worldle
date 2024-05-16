import { createContext, useState, useContext } from 'react';
const GlobalStateContext = createContext();
import { palabras } from '../data/palabras';

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {

  const numeroRandom = Math.floor(Math.random() * 200);
  const [palabra, setPalabra ] = useState("");
  const [palabraEscondida,setPalabraEscondida] = useState(palabras[numeroRandom]);
  const [encontradas,setEncontradas] = useState(Array.from({ length: palabras[numeroRandom].length }, () => 0))
  const [win , setWin] = useState(0) //0 nada 1 win 2 lose
  const [reset,setReset] = useState(false);


  return (
    <GlobalStateContext.Provider value={
      { palabra, 
      setPalabra 
      ,palabraEscondida
      ,setPalabraEscondida 
      ,encontradas,
      setEncontradas,
      win,
      setWin,
      reset,
      setReset }}>
      {children}
    </GlobalStateContext.Provider>
  );
};