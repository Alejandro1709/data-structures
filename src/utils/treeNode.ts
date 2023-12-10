export default class TreeNode<T> {
  private value: T | null;
  private left: TreeNode<T> | null;
  private right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public getValue(): T | null {
    return this.value;
  }

  public getLeft(): TreeNode<T> | null {
    return this.left;
  }

  public getRight(): TreeNode<T> | null {
    return this.right;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public setLeft(node: TreeNode<T> | null): void {
    this.left = node;
  }

  public setRight(node: TreeNode<T> | null): void {
    this.right = node;
  }
}
