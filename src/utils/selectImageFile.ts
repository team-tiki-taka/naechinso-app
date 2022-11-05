export async function selectImageFile(): Promise<File> {
  return await selectFile('image/png,image/jpg,image/gif');
}

export function toBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      }
    };
    reader.onerror = error => reject(error);
  });
}

export async function selectFile(accept?: string) {
  const input = document.createElement('input');
  input.hidden = true;
  input.setAttribute('type', 'file');
  if (accept) {
    input.setAttribute('accept', accept);
  }
  document.body.appendChild(input);
  return await new Promise<File>((resolve, reject) => {
    input.onerror = reject;
    input.onabort = reject;
    input.onblur = reject;
    input.addEventListener('change', () => {
      setTimeout(async () => {
        if (!input.files || input.files.length === 0) {
          reject();
          return;
        }
        const file = input.files[0];
        resolve(file);
      }, 1000);
    });
    input.click();
  }).finally(() => {
    document.body.removeChild(input);
  });
}
