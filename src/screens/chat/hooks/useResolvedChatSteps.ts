import {useCallback, useState} from 'react';

export function useResolvedChatSteps() {
  const [value, update] = useState<string[]>([]);
  const add = useCallback((item: string) => {
    update(prev => [...(prev ?? []), item]);
  }, []);
  return [value ?? [], add] as const;
}
