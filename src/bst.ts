class TreeNode<T> {
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

export class BinarySearchTree<T> {
  private root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  public insert(value: T): BinarySearchTree<T> | null {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current: TreeNode<T> = this.root;

    while (true) {
      if (value === current.getValue()) return null;

      if (value < current.getValue()!) {
        if (!current.getLeft()) {
          current.setLeft(newNode);
          return this;
        }
        current = current.getLeft()!;
      } else {
        if (!current.getRight()) {
          current!.setRight(newNode);
          return this;
        }
        current = current.getRight()!;
      }
    }
  }

  public find(value: T): TreeNode<T> | null {
    if (!this.root) return null;

    let current: TreeNode<T> = this.root;
    let found: boolean = false;

    while (current && !found) {
      if (value === current.getValue()) {
        found = true;
      } else if (value > current.getValue()!) {
        current = current.getRight()!;
      } else {
        current = current.getLeft()!;
      }
    }

    if (!found) return null;

    return current;
  }

  public includes(value: T): boolean {
    if (!this.root) return false;

    let current: TreeNode<T> = this.root;
    let found: boolean = false;

    while (current && !found) {
      if (value === current.getValue()) {
        return true;
      } else if (value > current.getValue()!) {
        current = current.getRight()!;
      } else {
        current = current.getLeft()!;
      }
    }
    return false;
  }
}
