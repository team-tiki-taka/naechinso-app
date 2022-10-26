import {useEffect} from 'react';

export function useTriggerInitialChat(
  resolved: string[],
  startAction: (id: string) => void,
) {
  useEffect(() => {
    if (!resolved.includes('initial')) {
      startAction('initial');
    }
  }, []);
}
