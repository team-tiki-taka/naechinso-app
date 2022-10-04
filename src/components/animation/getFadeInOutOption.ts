export function getFadeInOutOption<T>(value?: {fadeIn?: T; fadeOut?: T} | T): {
  fadeIn?: T;
  fadeOut?: T;
} {
  return value != null && typeof value === 'object'
    ? value
    : {fadeIn: value, fadeOut: value};
}
