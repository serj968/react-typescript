import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";



function App() {
  const inputName=useRef<HTMLInputElement>(null);
  const inputAge=useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input
        ref={inputName}
        label="Name:" type="text" id="name" 
        placeholder="Enter your name" 
      />
      <Input
        label="Age:" type="number" id="age" ref={inputAge}
        placeholder="Enter your age" 
      />
     
    </main>
  );
}

export default App;
