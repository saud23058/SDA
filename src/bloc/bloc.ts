'use client'
import { useState } from "react";

type counterEvent = "INCREMENT" | "DECREMENT" |"MUL"

interface CounterState{
  count:number
}

export const CounterBloc = () => {
  const [state, setState] = useState<CounterState>({ count: 0 })
  

  const onEvent = (event: counterEvent) => {
    switch (event) {
      case 'INCREMENT':
        setState({ count: state.count + 1 })
        break;
      case 'DECREMENT':
        setState({ count: state.count - 1 })
        break;
      
        case 'MUL':
          setState({ count: state.count *5  })
          break;
    }
  };
  return {state,onEvent}
}
