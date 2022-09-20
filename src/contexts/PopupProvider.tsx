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
}

interface Option {
  closeOnClickDimmer?: boolean;
}

export const ModalContext = createContext<State | null>(null);

export function PopupProvider({children}: {children: ReactNode}) {
  const [content, setContent] = useState<ReactNode>();
  const [, setOptions] = useState<Option>();
  const open = useCallback((content: ReactNode, options?: Option) => {
    setContent(content);
    setOptions(options);
  }, []);
  const value = useMemo(
    () => ({content, open, setOption: setOptions}),
    [content, open, setOptions],
  );
  return (
    <ModalContext.Provider value={value}>
      {content}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContextSafly(ModalContext);
  const open = context.open;
  const setOption = context.setOption;
  const close = useCallback(() => {
    context.setOption();
    context.open(undefined);
  }, [context.open, context.setOption]);
  return useMemo(() => ({open, close, setOption}), [open, close, setOption]);
}

export function useBottomSheet() {
  const {open, close, setOption} = useModal();
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
