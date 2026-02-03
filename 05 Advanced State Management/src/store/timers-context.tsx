import { createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

const initialState: TimersState = {
    isRunning: true,
    timers: [],
};


type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

// We initialize the context with null, and we will provide a proper value in the provider component.
const TimersContext = createContext<TimersContextValue | null>(null);

// This is a custom hook that we will use to access the 
// timers context in our components.
export function useTimersContext(): TimersContextValue {
    const context = useContext(TimersContext);
    if (!context) {
        throw new Error("TimerContext is null - that should not be the case!");
    }
    return context;
}

type TimersContextProviderProps = {
    children: React.ReactNode;
};


type StartTimersAction = {
    type: 'START_TIMERS';
};

type StopTimersAction = {
    type: 'STOP_TIMERS';
};

type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
};

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

// This is the reducer function that will handle the state transitions 
// based on the dispatched actions.
function timersReducer(state: TimersState, action: Action): TimersState {


    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true,
        };
    }

    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false,
        };
    }

    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration,
                },
            ],
        };
    }

    return state;
}

// This is the provider component that will wrap our app and provide the 
// timers context to all components.
export default function TimersContextProvider({ children }: TimersContextProviderProps) {

    // We use useReducer to manage the timers state.
    const [timersState, dispatch] = useReducer( timersReducer, initialState );
    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({ type: 'ADD_TIMER', payload: timerData });
        },
        startTimers() {
            dispatch({ type: 'START_TIMERS' });
        },
        stopTimers() {
            dispatch({ type: 'STOP_TIMERS' });
        },
    };

    return (
        <TimersContext.Provider value={ctx} >{children}</TimersContext.Provider>
    )
}