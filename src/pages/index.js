import { useState } from "react";
import Image from 'next/image';
import githubIcon from "../../public/github-icon.svg";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [isInputValue, setIsInputValue] = useState(''); //input values

  const handleChangeSetIntialNumber = (event) => { //input values
    setIsInputValue(Number(event.target.value));
  }
  const handleIncrement = () => {
      setCounter(counter + 1);
  }
  const handleDecrement = () => {
    if(counter > 0) { setCounter(counter - 1);}
  }
  const handleReset = () =>{
    setCounter(0);
  }
  const handleSetIntialCount = () => {
    if(isInputValue){
      setCounter(isInputValue);
      setIsInputValue("");
    }else{
      alert("Please enter a valid number")
    }
  }
  
  return (
    <>
   <header>
      <a href="https://github.com/Nandakishore695/nextJs-Todo-List"><Image src={githubIcon} alt="gitHub Nandakishore695" width={70}/></a>
    </header>
      <main className="text-center my-10">
        <h1 className="uppercase text-4xl">counter app</h1>
        <div className="my-6">
          <h2 className="my-6 text-8xl">{counter}</h2>
          <button className="capitalize p-4 bg-green-600 mx-2 rounded text-zinc-200 " onClick={handleIncrement}>increment</button>
          <button className="capitalize p-4 bg-red-600 mx-2 rounded text-zinc-200" onClick={handleDecrement}
            disabled={counter === 0 }
          >decrement</button>
            <button className="capitalize p-4 bg-gray-600 mx-2 rounded text-zinc-200 " onClick={handleReset} disabled={counter === 0 }>reset counter</button>
        </div>
        <div className="my-6 flex justify-center">
          <input placeholder="55" className="text-3xl p-2 mx-2 border-2 border-blue-300 rounded" onChange={handleChangeSetIntialNumber} type="number" min={1} value={isInputValue} />
          <button className="capitalize p-4 mx-2 rounded text-zinc-200 bg-sky-500" onClick={handleSetIntialCount} >Set Inital Counter Number</button>
        </div>
      </main>
    </>
  );
}
