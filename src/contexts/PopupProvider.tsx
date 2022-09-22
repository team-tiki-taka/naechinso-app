import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {BottomSheet} from '../components/BottomSheet';
import {useContextSafly} from '../hooks/useContextSafly';

interface State {
  content: ReactNode;
  open: (content: ReactNode, options?: Option) => void;
  setOption: (options?: Option) => void;
  close: () => void;
}

interface Option {
  closeOnClickDimmer?: boolean;
}

export const PopupContext = createContext<State | null>(null);

export function PopupProvider({children}: {children: ReactNode}) {
  const [content, setContent] = useState<ReactNode>();
  const [, setOptions] = useState<Option>();
  const open = useCallback((content: ReactNode, options?: Option) => {
    setContent(content);
    setOptions(options);
  }, []);
  const close = useCallback(() => {
    setOptions({});
    open(undefined);
  }, []);
  const value = useMemo(
    () => ({content, open, close, setOption: setOptions}),
    [content, open, setOptions],
  );
  return (
    <PopupContext.Provider value={value}>
      {content}
      {children}
    </PopupContext.Provider>
  );
}

export function useBottomSheet() {
  const {open, close, setOption} = useContextSafly(PopupContext);
  const openBottomSheet = useCallback(
    (
      children: ReactNode,
      options?: {onClose?: () => void; closeOnClickDimmer?: boolean},
    ) => {
      open(
        <BottomSheet
          open
          onClose={
            options?.onClose ??
            (options?.closeOnClickDimmer !== false ? close : undefined)
          }>
          {children}
        </BottomSheet>,
        options,
      );
    },
    [open],
  );
  return useMemo(
    () => ({open: openBottomSheet, close, setOption}),
    [openBottomSheet, close],
  );
}
