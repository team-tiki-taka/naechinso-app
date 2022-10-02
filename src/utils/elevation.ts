import colors from '@constants/color';

export function elevationStyle(amount: number) {
  return `
    elevation: ${amount};
    shadow-color: ${colors.neural};
    shadow-offset: 0px 3px;
    shadow-opacity: 0.2;
    shadow-radius: 3.84px;
  `;
}
