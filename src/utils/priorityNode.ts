export default class PQNode {
  private value: string;
  private priority: number;

  constructor(value: string, priority: number) {
    this.value = value;
    this.priority = priority;
  }

  public getValue(): string {
    return this.value;
  }

  public getPriority(): number {
    return this.priority;
  }

  public setValue(value: string): void {
    this.value = value;
  }

  public setPriority(priority: number): void {
    this.priority = priority;
  }
}
