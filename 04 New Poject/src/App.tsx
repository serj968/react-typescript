import Button from "./components/Button";



function App() {
  return (
    <main>
      <p>
        <Button onClick={() => alert('Button clicked!')}>
          Click Me
        </Button>
      </p>
      <p>
        <Button href="https://www.google.com">
          Go to Google
        </Button>
      </p>
    </main>
  );
}

export default App;
