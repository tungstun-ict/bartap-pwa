export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

type SortItem = {
  name: any
}
export function sortNameAlphabet(items: SortItem[]) {
  return items.sort((a, b) => a.name - b.name);
}