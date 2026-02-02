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
        {/* <Container as={Input}>level </Container> */}
     </p>
     
    </main>
  );
}

export default App;
