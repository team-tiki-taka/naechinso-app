export async function sleep(time: number) {
  return await new Promise<void>(resolve => {
    setTimeout(resolve, time);
  });
}
