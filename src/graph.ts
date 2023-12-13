import { type AdjacencyListType } from './types/graph';

export default class Graph {
  private adjacencyList: AdjacencyListType;

  constructor() {
    this.adjacencyList = {};
  }

  public getAdjacencyList(): AdjacencyListType {
    return this.adjacencyList;
  }

  public addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}
