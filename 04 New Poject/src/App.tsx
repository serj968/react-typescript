import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";



function App() {
  return (
    <main>
      <p>
        <Container as={Button}>Click me</Container>  
      </p>
     <p>
        <Container label="Age" id="ss" type="number" as={Input}></Container>
     </p>
     <p>
        <Container label="Name" id="ss" type="text" as={Input}></Container>
     </p>
     
    </main>
  );
}

export default App;
