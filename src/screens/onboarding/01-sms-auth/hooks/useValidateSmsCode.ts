import {useBooleanState} from '@hooks/common';
import {useUser} from '@hooks/useUser';
import {verifyAuthCode} from '@remotes/auth';
import {useCallback} from 'react';

export function useValidateSmsCode(phoneNumber: string) {
  const [isInvalid, setIsInvalid] = useBooleanState();
  const [, reload] = useUser();

  const validate = useCallback(async (code: string) => {
    const res = await verifyAuthCode(phoneNumber, code);
    if (!res.isSuccess) {
      setIsInvalid();
      return;
    }
    await reload();
    return res;
  }, []);
  return {validate, isInvalid};
}
