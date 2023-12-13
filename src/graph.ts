type AdjacencyListType = { [vertex: string]: string[] };

export default class Graph {
  private adjacencyList: AdjacencyListType;

  constructor() {
    this.adjacencyList = {};
  }

  public addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}
