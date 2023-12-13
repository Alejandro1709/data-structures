export default class SLLNode<T> {
  private value: T;
  private next: SLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public getValue(): T {
    return this.value;
  }

  public getNext(): SLLNode<T> | null {
    return this.next;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public setNext(next: SLLNode<T> | null): void {
    this.next = next;
  }
}
