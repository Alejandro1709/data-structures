import TreeNode from './utils/treeNode';

export default class Tree<T> {
  protected root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  public getRoot(): TreeNode<T> | null {
    return this.root;
  }

  public bfs(): T[] {
    let node = this.root;
    let queue: TreeNode<T>[] = [];
    let visited: T[] = [];

    if (this.root) {
      queue.push(node!);

      while (queue.length) {
        node = queue.shift()!;
        if (node) {
          visited.push(node.getValue()!);

          if (node.getLeft()) queue.push(node.getLeft()!);
          if (node.getRight()) queue.push(node.getRight()!);
        }
      }
    }

    return visited;
  }

  public preOrderTraversal(): T[] | null {
    let visited: T[] = [];
    let current = this.root;

    function helper(node: TreeNode<T>) {
      visited.push(node.getValue()!);

      if (node.getLeft()) helper(node.getLeft()!);
      if (node.getRight()) helper(node.getRight()!);
    }

    if (!current) return null;

    helper(current);

    return visited;
  }
}
