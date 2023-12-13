export default class DLLNode<T> {
  private value: T;
  private prev: DLLNode<T> | null;
  private next: DLLNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  public getValue(): T {
    return this.value;
  }

  public getNext(): DLLNode<T> | null {
    return this.next;
  }

  public getPrev(): DLLNode<T> | null {
    return this.prev;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public setNext(next: DLLNode<T> | null): void {
    this.next = next;
  }

  public setPrev(prev: DLLNode<T> | null): void {
    this.prev = prev;
  }
}
