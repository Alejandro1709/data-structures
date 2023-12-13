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

  public addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}
