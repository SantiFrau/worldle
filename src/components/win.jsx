import { useGlobalState } from "./state"

export default function Win(){
    
    const {win,setWin} = useGlobalState()
    console.log(win)
    return(
        <div onClick={()=>{setWin(0)}} className={`${(win>0) ? "block" : "hidden"} absolute w-full h-full bg-black bg-opacity-40 flex items-center justify-center `}>
            <div className="w-1/3 h-max p-10 bg-zinc-800 rounded-lg">
                <h4 className={`text-white text-2xl font-bold w-full h-max text-center ${win==1 ? "block" : "hidden"}`}>
                    Win
                </h4>
                <h4 className={`text-white text-2xl font-bold w-full h-max text-center ${win==2 ? "block" : "hidden"}`}>
                    Lose
                </h4>
                

            </div>

        </div>
    )
}