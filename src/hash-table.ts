export default class HashTable {
  private keyMap: any[][];

  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  public set(key: string, value: string): void {
    const index = this.hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    if (this.keyMap[index].includes(key)) return;

    this.keyMap[index].push([key, value]);
  }

  public get(key: string): any[] | undefined {
    let index = this.hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  public keys(): string[] {
    let keys: string[] = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (!keys.includes(this.keyMap[i][0][0])) {
          keys.push(this.keyMap[i][0][0]);
        }
      }
    }

    return keys;
  }

  public values(): string[] {
    let values: string[] = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        if (!values.includes(this.keyMap[i][0][1])) {
          values.push(this.keyMap[i][0][1]);
        }
      }
    }
    return values;
  }

  private hash(key: string): number {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
