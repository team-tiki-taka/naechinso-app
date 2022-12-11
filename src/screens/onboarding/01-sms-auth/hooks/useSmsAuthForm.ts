import {useAlertSheet} from '@components/interaction';
import {useBooleanState} from '@hooks/common';
import {sendAuthCode} from '@remotes/auth';
import {useCallback, useEffect, useState} from 'react';
import {useCountdown} from './useCountdown';

export function useSmsAuthForm(phoneNumber: string) {
  const openAlertSheet = useAlertSheet();
  const [isResended, setIsResendTrue] = useBooleanState(); // 인증번호 재전송 여부
  const [code, setCode] = useState<string>(''); // 인증코드

  const resend = useCallback(async () => {
    await sendAuthCode(phoneNumber);
    start();
    setIsResendTrue();
    setCode('');
  }, []);

  const handleExpire = useCallback(async () => {
    await openAlertSheet(
      '인증번호 입력 시간이\n초과되었어 ⏰',
      '같은 번호로 다시 보내줄테니까\n확인하고 다시 입력해줘!',
      '다시 받기',
    );
    resend();
  }, [openAlertSheet]);

  const {time, start} = useCountdown(180, handleExpire);

  useEffect(() => {
    start();
  }, []);

  return {time, code: {value: code, onChange: setCode}, isResended, resend};
}
