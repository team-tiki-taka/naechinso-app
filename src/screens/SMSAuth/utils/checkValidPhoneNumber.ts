export const PHONE_NUMBER_REGEX = /(01[016789]|099|098|090)[0-9]{8}/;
export const FORMATTED_PHONE_NUMBER_REGEX =
  /(01[016789]|099|098|090)-([0-9]{4})-([0-9]{4})/;
export function checkValidPhoneNumber(phoneNumber: string | undefined) {
  if (phoneNumber === undefined) {
    return false;
  } else {
    return PHONE_NUMBER_REGEX.test(phoneNumber.replace(/[^0-9]/g, ''));
  }
}
