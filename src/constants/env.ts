export function isLive() {
  return !__DEV__;
}

export function isAlpha() {
  return !isLive();
}
