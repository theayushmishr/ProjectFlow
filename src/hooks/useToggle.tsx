import { useState } from 'react';

export default function useToggle(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(prev => !prev);
  return [state, toggle] as const;
}

//const [isToggled, toggle] = useToggle(false);