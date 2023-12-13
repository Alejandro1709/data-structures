export default class QNode<T> {
  private value: T;
  private next: QNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public getValue(): T {
    return this.value;
  }

  public getNext(): QNode<T> | null {
    return this.next;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public setNext(next: QNode<T> | null): void {
    this.next = next;
  }
}
