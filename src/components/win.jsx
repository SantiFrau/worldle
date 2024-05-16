import { useGlobalState } from "./state"

export default function Win() {
    const { win, setWin, setReset } = useGlobalState()

    return (
        <div onClick={() => { setWin(0) }} className={`${win > 0 ? "block" : "hidden"} fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 `}>
            <div className="w-1/3 h-max p-10 bg-zinc-800 rounded-lg flex flex-col items-center justify-center gap-10 backdrop-filter backdrop-blur-sm bg-opacity-40">
                <h4 className={`text-green-500 text-4xl font-bold w-full h-max text-center ${win == 1 ? "block" : "hidden"}`}>
                    Win
                </h4>
                <h4 className={`text-red-500 text-4xl font-bold w-full h-max text-center ${win == 2 ? "block" : "hidden"}`}>
                    Lose
                </h4>

                <button onClick={() => { setReset(true) }} className="w-max hover:bg-zinc-700 cursor-pointer px-5 py-2 bg-zinc-800 rounded-lg border border-1 text-sky-400 border-zinc-400">Reintentar</button>
            </div>
        </div>
    )
}