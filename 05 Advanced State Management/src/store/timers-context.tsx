import { createContext } from "react";

type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

// We initialize the context with null, and we will provide a proper value in the provider component.
const TimersContext = createContext<TimersContextValue | null>(null);

type TimersContextProviderProps = {
    children: React.ReactNode;
};

// This is the provider component that will wrap our app and provide the 
// timers context to all components.
export default function TimersContextProvider({ children }: TimersContextProviderProps) {

    const ctx: TimersContextValue = {
        timers: [],
        isRunning: true,
        addTimer(timerData) {
            // ...
        },
        startTimers() {
            // ...
        },
        stopTimers() {
            // ...
        },
    };

    return (
        <TimersContext.Provider value={ctx} >{children}</TimersContext.Provider>
    )
}