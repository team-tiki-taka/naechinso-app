export function convertPixelValue(size: string | number | undefined) {
  if (typeof size === 'number') {
    return `${size}px`;
  } else if (typeof size === 'string') {
    return size;
  }
}
