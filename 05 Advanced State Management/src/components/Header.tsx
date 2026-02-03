
import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Header() {
  const ctx = useTimersContext();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={ctx.isRunning ? ctx.stopTimers : ctx.startTimers}>
        {ctx.isRunning ? "Stop" : "Start"} Timers
        </Button>
    </header>
  );
}
