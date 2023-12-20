import type { VisitedListType, AdjacencyListType } from './types/graph';

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
    if (
      this.adjacencyList[vertex1].includes(vertex2) &&
      this.adjacencyList[vertex2].includes(vertex1)
    )
      return;

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  public removeEdge(vertex1: string, vertex2: string): void {
    if (
      this.adjacencyList[vertex1].includes(vertex2) &&
      this.adjacencyList[vertex2].includes(vertex1)
    ) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }

  public removeVertex(vertex: string): void {
    while (this.adjacencyList[vertex].length > 0) {
      let nextVertex = this.adjacencyList[vertex].pop();

      this.removeEdge(vertex, nextVertex!);
    }

    delete this.adjacencyList[vertex];
  }

  public recursiveDFS(start: string): string[] | null {
    const result: string[] = [];
    const visited: VisitedListType = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex: string) {
      if (!vertex) return null;

      visited[vertex] = true;

      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }

    dfs(start);

    return result;
  }

  public iterativeDFS(start: string): string[] {
    const stack: string[] = [start];
    const results: string[] = [];
    const visited: VisitedListType = {};
    let currentVertex: string;

    visited[start] = true;

    while (stack.length) {
      console.log(stack);
      currentVertex = stack.pop()!;
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return results;
  }

  public bfs(start: string): string[] {
    const queue: string[] = [start];
    const results: string[] = [];
    const visited: VisitedListType = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();

      if (!currentVertex) return [];

      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return results;
  }
}
