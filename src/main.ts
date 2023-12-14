import Graph from './graph';

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log(graph.getAdjacencyList());

graph.removeEdge('C', 'D');

console.log(graph.getAdjacencyList());

graph.removeVertex('D');

console.log(graph.getAdjacencyList());
