export const chunk = (arr: Array<any>, chunkSize: number) => {
  const cache: Array<any> = [];
  const tmp: Array<any> = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) {
    cache.push(tmp.splice(0, chunkSize));
  }
  return cache;
};
