import TreeNode from './utils/treeNode';

export class Tree<T> {
  protected root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  public getRoot(): TreeNode<T> | null {
    return this.root;
  }

  public bfs() {}
}
