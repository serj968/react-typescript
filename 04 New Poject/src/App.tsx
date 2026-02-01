import Button from "./components/Button";



function App() {
  return (
    <main>
      <p>
      <Button el="button" onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
      </p>
      <p>
      <Button el="anchor" href="https://www.google.com">
        Go to Google
      </Button>
      </p>
      {/* <Input label="Your Name" id="name" type="text"/>
      <Input label="Your Age" id="age" type="number" /> */}
    </main>
  );
}

export default App;
